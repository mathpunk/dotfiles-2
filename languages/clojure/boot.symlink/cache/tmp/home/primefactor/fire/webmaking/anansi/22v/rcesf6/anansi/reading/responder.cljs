
;; the interface's data
(:data interface)
has a/is a db

;; the interface's view
(:view interface)
when (svg?)
  interface has a frame

;; the user
(:user interface)
"Has security implications"

;; the environment the interface is experiencing
(declare low-bandwidth offline high-bandwidth trusted-network really-trusted-network)

;; formats
(declare portrait landscape desktop)

;; brushes
when some data is in hover interaction with user,
change the style on some other part of the view or its children.

;; actions
things that are available to be done to some kind of data. when data is done to, it goes d to d-prime. when the view is done to, it might sweep around or change views of data but it does not get any.

;; interactions
(declare tag-add flick-away lane-place text-add)

;; transitions
(declare portrait->landscape landscape->portrait)
