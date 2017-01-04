(ns display.core
  ; (:require-macros [macros.macro :refer [foobar]])
  (:require [common.hello :refer [foo-cljc]]
            [ajax.core :refer [GET]]
            [reagent.core :as r]))

;; Reagent application state
;; Defonce used to that the state is kept between reloads
(defonce app-state (r/atom {:y 2016}))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn get-tweet-by-id []
  (GET "/twitter" {:params {:id 798330959271559168}
                   :handler handler
                   :error-handler error-handler}))

(defn main []
  [:div
   [:h1 (foo-cljc (:y @app-state))]
   [:div.btn-toolbar
    [:button.btn.btn-danger
     {:type "button"
      :on-click #(swap! app-state update :y inc)} "+"]
    [:button.btn.btn-success
     {:type "button"
      :on-click #(swap! app-state update :y dec)} "-"]
    [:button.btn.btn-default
     {:type "button"
      :on-click #(js/console.log (get-tweet-by-id))}
     "Console.log"]]])


(get-tweet-by-id)

(defn start! []
  (js/console.log "Starting the app")
  (r/render-component [main] (js/document.getElementById "app")))

;; When this namespace is (re)loaded the Reagent app is mounted to DOM
(start!)

;; Macro test
;; (foobar :abc 3)

;; Example of interop call to plain JS in src/cljs/foo.js
;; (js/foo)

(println "foo")
