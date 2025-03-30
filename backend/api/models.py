from django.db import models

class Dish(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True)
    difficulty = models.CharField(max_length=50, blank=True)
    prep_time_minutes = models.IntegerField(blank=True, null=True)
    cook_time_minutes = models.IntegerField(blank=True, null=True)
    total_time_minutes = models.IntegerField(blank=True, null=True)
    servings = models.IntegerField(blank=True, null=True)
    instructions = models.TextField()  # 🆕 all steps in one field

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    dish = models.ForeignKey(Dish, related_name='ingredients', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.quantity} {self.name}"


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class DishTag(models.Model): # Many to Many bridge 
    dish = models.ForeignKey(Dish, related_name='tags', on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.dish.name} - {self.tag.name}"
