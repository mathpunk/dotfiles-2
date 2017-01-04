
;; the model of the pins, gradually improving and being indexed when that seems to make sense
;; gate for, "the index probably exists" btw
(defn add-pin [pin]
  (let [ent {:pin/time (:time pin)
             :pin/href (:href pin)
             :pin/description (:description pin)
             :pin/extended (:extended pin)
             :pin/meta (:meta pin)
             :pin/hash (:hash pin)
             :pin/shared (:shared pin)
             :pin/toread (:toread pin)
             :pin/tags (clojure.string/split (:tags pin) #" ") }]
         (d/transact! conn [ent])))


(comment ;; future routes
  :id "pin/:id"
  :tagged "word" pins/tagged/:keyword
  :tagged #{"words"} "pins/tagged/:keyword-set-union-or-intersection"
  :tagged #{"words"} "/tagged/:keyword-set-union-or-intersection" ;; alias, later slightly different
  )

MONGO
http://clojuremongodb.info/articles/getting_started.html#how_to_insert_documents_with_monger
Write migration functions (one-off boot tasks? planck? python?) like so:


Given pins. Want:

For any pin that is a tweet,
status-id,
user,
time,
tags
put it in the collection 'tweets'.

For any pin that is a tweet,
a collection 'users',
indexing the tweets that user posted,
the tags are included
and the time.

For any pin,
its tag set (or the empty tag set),
and its id in the 'pins' collection,
put into a tag-sets collection (I think).

Also want some routes, such that,
/pins/:id
/users/:id => user, they follow, they're followed by, their bio, do I follow them
/tagged/:word => collection of pins s.t. :word in pins.tags
/tags/:set-of-words(?)

Should give a type keyword? idk
