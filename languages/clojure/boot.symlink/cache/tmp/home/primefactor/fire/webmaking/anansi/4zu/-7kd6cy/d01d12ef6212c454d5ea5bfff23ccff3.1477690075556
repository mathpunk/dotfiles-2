(ns anansi.reading.app
  (:require [reagent.core :as reagent :refer [atom]]
            [anansi.reading.db :as data]
            [ajax.core :refer [GET POST]]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.tools.reader.edn :as edn]
            [datascript.core :as d]
            [reagent-material-ui.core :refer [List ListItem]] ))
(enable-console-print!)
(declare render)

;; Browser Database
;; ================
;; The goal is to experiment with the pattern of an in-memory database as the source of truth for your views. "Put a little data in it, it's fast. Put a lot of data in it, well, at least it has indexes", and "it's better than filtering over an array."

(def schema
  ;; { :entity/attribute {:db/attribute :db.attribute/value} ... }
  ;;  {:pin/user {:db/valueType :db.type/ref}
     { :pin/href {:db/cardinality :db.cardinality/one}
       :pin/tags {:db/cardinality :db.cardinality/many} })

(defonce conn
  (do (println "Creating connection")
      (d/create-conn schema)))

(defonce state (atom {}))

;; Server Database
;; ===============
;; I got an error when I tired to shove the whole 10M across an AJAX call into the db. I don't actually know the orders-of-magnitude that the browser is suited for; but I do know that my system works fine with 15 mins, so I decided to just assume that putting 25000 pins in was a problem, and so I should fall back to the server to try and slice that into smaller chunks.

;; The following is one handler that works, and a few handlers that seem like good ideas that i'll try to get working. I don't know much about REST design but I'm going by the Abby Covert way of just trying to put some words for things down and prepare to adjust later.

;; ...

;; Let's also make a little bit of navigation, so that at least I can jump around to different slices to read their summaries, and later to view their base visualizations.

;; ...
;; [:a links that trigger the server behavior]
;; ajax requests
;; possibly, react router or secretary, but probably, whacking the state atom in the face.

;; Note: I went with Mongo, for no other reason that I used the clojure bindings before. I don't know how to select a database; we were using Rethink at my job, but while we liked the changefeeds, we still ended up putting in a change handler because Rethink was pushing changes without recording the fact that changes had occurred. So I can't tell if they're solving in the right place if they're missing that level of auditability, does that make sense?

;; AJAX & Loading
(defn edn-handler [res]
  (edn/read-string res))

(defn error-handler [{:keys [status status-text]}]
  (println (str "Error while fetching: " status " " status-text)))

(defn insert-entity [ent]
  (d/transact! conn [ent]))

(defn insert-many [ents]
  (doseq [e ents]
    (insert-entity e)))

(defn fetch-recent [handler]
  (let [url "/pins/recent"]
    (GET url {:handler handler :error-handler error-handler})))

(defn posts []
  (:posts (fetch-recent edn-handler)))

(defn recent-posts [] (fetch-recent (comp :posts edn-handler)))

(defn pin->entity [p]
   {:pin/href (:href p)
    :pin/tags (:tags p) } )

(defn do-to-recent-posts [f]
  "the same thing but with a f in the composition in the right place"
   (fetch-recent (comp f :posts edn-handler)))

(do-to-recent-posts #(doseq [p %] (-> p pin->entity insert-entity)))

;;;;;;;;


; (defn pins-db-handler [intent]
;   (let [handler (comp insert-many :posts edn-handler)]
;     (fetch intent handler)))



;; Updates
;; =======
;; Supposedly these functions will make it so that any transaction 1) is logged to the browser console and 2) causes a re-render of the ui. (Oh hey, this is why rum instead of react for this style? Because if you're pounding the render function on transactions, you don't need the reactive atom at all. Hm!)

(d/listen! conn :render
  (fn [tx-report] (render (:db-after tx-report))))

(d/listen! conn :log
  (fn [tx-report] (println (:tx-data tx-report))))

;; Views: Composition & Rendering
;; ==============================
(defn welcome-pane []
  [:div#welcome [:h2 "Good morning--"]])

(defn summary [db]
    [:div#summary
      [:div#today "today is 2016-10-16"] ;; todo: look up now function
      [:div#source
        (str "viewing " (:user @db) "'s pins, retrieved " (:date @db))]
      [:div#progress (str (count (:posts @db)) " pins to review")]
    ])

(defn display [db]
  [:div#pins {:style {:margin-top 20}} [:h3 "Data"] (:eavt @db)])

(defn navigation [db]
  "Getting from one data slice view to another.")

;; Actions & Brushes (future)
;; ==========================
;; Aspirational at the moment -- what can you do, and how are your actions or possible actions represented visually?
(defn actions [db] ["edit tags", "place into a lane", "kick off with a 'huh'"])
(defn brushes [db] ["visually display relationships, entity to entity and entity-now to entity-will"])


;; Compose & Render
;; ================
(defn app [db]
  [:div#app
    [welcome-pane]
    [summary state]
    [display state]
  ])

(defn render
  ([] (render @conn))
  ([db] (reagent/render-component [app db]
                            (.getElementById js/document "container"))))
