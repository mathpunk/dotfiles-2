(ns anansi.reading.app
  (:require [reagent.core :as reagent :refer [atom]]
            [anansi.reading.db :as data]
            [ajax.core :refer [GET POST]]
            [anansi.reading.components :as c]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.tools.reader.edn :as edn]
            [datascript.core :as d]
            [reagent-material-ui.core :refer [List ListItem]] ))
(enable-console-print!)

(def schema
  ;; { :entity/attribute {:db/attribute :db.attribute/value} ... }
  { :pin/time {:db/cardinality :db.cardinality/one}
    :pin/href {:db/cardinality :db.cardinality/one}
    :pin/tags {:db/cardinality :db.cardinality/many}
   })

(defonce conn
  (do (println "Creating connection")
      (d/create-conn schema)))

(defn add-pin [pin]
  (let [ent {:pin/time (:time pin)
             :pin/hash (:hash pin)
             :pin/href (:href pin)
             :pin/tags (clojure.string/split (:tags pin) #" ") }]
          (d/transact! conn [ent])))

(defonce state (atom {}))

(defn handler [res]
  (let [edn (edn/read-string res)]
    (do
      (reset! state edn)
      (doseq [p (:posts @state)]
        (add-pin p) ))))

(defn error-handler [{:keys [status status-text]}]
  (println (str "something bad happened: " status " " status-text)))

(GET "/pins/recent" {:handler handler
              :error-handler error-handler})

;; View
;; ====
(defn welcome-pane []
  [:div#welcome [:h2 "Good afternoon--"]])

(defn summary-pane [db]
    [:div#summary
      [:div#today "today is 2016-10-16"]
      [:div#source
        (str "viewing " (:user @db) "'s pins, retrieved " (:date @db))]
      [:div#progress (str (count (:posts @db)) " pins to review")]
    ])

(defn one-pin []
  (GET "/pins/f3f8be26fc3df85b35089ee5fe94468f"))

(defn all-tags []
  (str (GET "/pins/tags")))

(defn review-pane [db]
  [:div#pins {:style {:margin-top 20}}
   [:h3 "Data"]
   [:p (str ( one-pin )) ]])

(defn app [db]
  [:div#app
    [welcome-pane]
    [summary-pane state]
    [review-pane state]
  ])

(defn render
  ([] (render @conn))
  ([db] (reagent/render-component [app db]
                            (.getElementById js/document "container"))))

(d/listen! conn :render
  (fn [tx-report] (render (:db-after tx-report))))

(d/listen! conn :log
  (fn [tx-report] (println (:tx-data tx-report))))
