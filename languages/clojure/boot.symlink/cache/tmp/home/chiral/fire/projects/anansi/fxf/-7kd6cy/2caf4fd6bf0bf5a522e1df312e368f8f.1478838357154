(ns anansi.server
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [monger.core :refer [connect get-db]]
            [monger.collection :as mongo]
            [clj-http.client :as client]
            [cheshire.core :refer [parse-string]])
  (:import [com.mongodb MongoOptions ServerAddress]))

(def conn (connect {:host "localhost" :port 27017}))
(def db (get-db conn "anansi"))
(def coll "pins")

(def user (System/getenv "PINBOARD_USER"))
(def password (System/getenv "PINBOARD_PW"))

(declare recent-pins)

(defroutes server
  (GET "/" [] (ring.util.response/redirect "/index.html"))
  (GET "/pins/recent" [] (str recent-pins))
  ;; (GET "/pins/:id" [id] (str (mongo/find db coll :hash id)))
  (GET "/pins/:id" [id] (str id))
  (GET "/tags" [] "You sure have a lot of tags!")
  (route/resources "/" {:root "."}))

(defn recent-pins []
  (let [url (str "https://" user ":" password "@api.pinboard.in/v1/posts/recent?format=json")
        body (:body (client/get url))]
          (parse-string body true)))

