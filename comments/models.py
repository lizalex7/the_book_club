from django.db import models

class Comment(models.Model):
  text = models.CharField(max_length=2000)
  create_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  book = models.ForeignKey(
    to='books.Book',
    on_delete=models.CASCADE,
    related_name='reviews'
  )
