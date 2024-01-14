from django.db import models

class Review(models.Model):
  text = models.CharField(max_length=1000)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  book = models.ForeignKey(
    to='books.Book',
    on_delete= models.CASCADE,
    related_name='books'
  )
