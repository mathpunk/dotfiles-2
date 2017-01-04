(ns anansi.server
  (:require [compojure.core :refer :all]
            [anansi.data :as data ]
            [datascript.core :as d]
            [cognitect.transit :as transit]
            [monger.core :as mg]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.not-modified :refer [wrap-not-modified]]
            [compojure.route :as route])
  (:import [com.mongodb MongoOptions ServerAddress]))

(defroutes server
  (GET "/" [] (ring.util.response/redirect "/index.html"))
  (GET "/pins/recent" [] (data/recent-pins))
  (GET "/pins/summary" [] (data/pin-summary))
  (GET "/pins/edn" [] (data/pin-edn))
  (GET "/pin/:hash" [hash] )
  (route/resources "/" {:root "."}))
