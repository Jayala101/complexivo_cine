from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ShowsViewSet, ReservationsViewSet
from .movie_catalog_views import movie_catalog_detail, movie_catalog_list_create
from .reservation_event_views import reservation_events_detail, reservation_events_list_create

router = DefaultRouter()
router.register(r"shows", ShowsViewSet, basename="shows")
router.register(r"reservations", ReservationsViewSet, basename="reservations")

urlpatterns = [
    # Mongo
    path("movie-catalog/", movie_catalog_list_create),
    path("service-types/<str:id>/", movie_catalog_detail),
    path("reservation-events/", reservation_events_list_create),
    path("vehicle-services/<str:id>/", reservation_events_detail),
]
urlpatterns += router.urls