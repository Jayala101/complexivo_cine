from rest_framework import serializers

class MovieCatalogSerializer(serializers.Serializer):
    movie_title = serializers.CharField()
    genre = serializers.CharField()
    duration_min = serializers.IntegerField()
    rating = serializers.CharField()
    is_active = serializers.BooleanField(default=True)

class ReservationEventsSerializer(serializers.Serializer):
    reservation_id = serializers.IntegerField()
    event_type = serializers.CharField()
    source = serializers.CharField()
    note = serializers.CharField()
    created_at = serializers.DateField(required=False)   

    
