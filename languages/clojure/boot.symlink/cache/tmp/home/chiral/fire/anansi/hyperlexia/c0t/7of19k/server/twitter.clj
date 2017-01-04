(ns server.twitter
  (:require [twitter.oauth :refer [make-oauth-creds]]
            [twitter.callbacks]
            [twitter.callbacks.handlers]
            [twitter.api.restful :as tw])
  (:import
   (twitter.callbacks.protocols SyncSingleCallback)))

(def *app-consumer-key* (System/getenv "HYPERLEXIA_APP_CONSUMER"))
(def *app-consumer-secret* (System/getenv "HYPERLEXIA_APP_SECRET"))
(def *user-access-token* (System/getenv "HYPERLEXIA_USER_TOKEN"))
(def *user-access-token-secret* (System/getenv "HYPERLEXIA_USER_SECRET"))

(def my-creds (make-oauth-creds *app-consumer-key*
                                *app-consumer-secret*
                                *user-access-token*
                                *user-access-token-secret*))

;; GET statuses/lookup
;; GET statuses/retweeters/ids
;; GET statuses/retweets/:id
;; GET statuses/show/:id
;; GET users/lookup

(defn get-tweet-by-id [id] (str "let's get tweet " id))

; simply retrieves the user, authenticating with the above credentials
; note that anything in the :params map gets the -'s converted to _'s
(println (tw/users-show :oauth-creds my-creds :params {:screen-name "mathpunk"}) )

; shows the users friends
(defn my-friends
  (println (tw/friendships-show :oauth-creds my-creds
                             :params {:target-screen-name "mathpunk"}) ))

