from rest_framework import serializers

class MovieCatalogSerializer(serializers.Serializer):
    movie_title = serializers.CharField(max_length=120)
    genre = serializers.CharField(required=False)
    duration = serializers.IntegerField()
    rating = serializers.CharField(max_length=120)
    is_active = serializers.BooleanField(default=True)

class ReservationEventsSerializer(serializers.Serializer):
    reservation_id = serializers.IntegerField()        # ID de Vehiculo (Postgres)
    event_type = serializers.CharField()       # ObjectId (string) de service_types
    source = serializers.CharField(required=False, allow_blank=True)
    note = serializers.CharField(required=False, allow_blank=True)
    created_at = serializers.DateTimeField(required=False)