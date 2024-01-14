from .common import BookSerializer
from users.serializers.common import BookListUserSerializer
from reviews.serializers.common import ReviewSerializer

class BookListSerializer(BookSerializer):
  owner = BookListUserSerializer()

class PopulatedBookSerializer(BookSerializer):
  reviews = ReviewSerializer(many=True)