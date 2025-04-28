import csv 
import os
import heapq 
print("Working directory:", os.getcwd())


class Node:  # Index,Popularity,Recipe Name,Description,Ingredients,Directions,Category,Nutrients,Servings,Image URL, HistoryURL, History, Origin
    def __init__(self, line):
        self.ID = line[0]  # string integer
        self.Popularity = int(line[1])  # converted to int
        self.RecipeName = line[2]
        self.Description = line[3]
        self.Ingredients = line[4]
        self.Directions = line[5]
        self.Category = line[6]
        self.Nutrients = line[7]
        self.Servings = int(line[8])
        self.ImageURL = line[9]
        self.HistoryURL = line[10]
        self.History = line[11]
        self.Origin = line[12]

    def to_dict(self) -> dict[str, str]:
        return {
            'ID': self.ID,
            'Popularity': self.Popularity,
            'RecipeName': self.RecipeName,
            'Description': self.Description,
            'Ingredients': self.Ingredients,
            'Directions': self.Directions,
            'Category': self.Category,
            'Nutrients': self.Nutrients,
            'Servings': self.Servings,
            'ImageURL': self.ImageURL, 
            'HistoryURL' : self.HistoryURL, 
            'History' : self.History, 
            'Origin' : self.Origin
        }


# script_dir = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(script_dir, "recipes.csv") 
file_path = "scripts/recipes.csv"

def create_list_dict_nodes() -> list[Node]:          
    with open(file_path, 'r') as csvfile:
        list_of_recipe_dict_nodes = []
        reader = csv.reader(csvfile)
        next(reader)  # Skip header
        for line in reader: 
            recipe_node = Node(line)
            list_of_recipe_dict_nodes.append(recipe_node.to_dict())
    
            # print("ID:", recipe_node.ID)
            # print("Popularity:", recipe_node.Popularity)
            # print("RecipeName:", recipe_node.RecipeName)
            # print("Description:", recipe_node.Description)
            # print("Ingredients:", recipe_node.Ingredients)
            # print("Directions:", recipe_node.Directions)
            # print("Category:", recipe_node.Category)
            # print("Nutrients:", recipe_node.Nutrients)
            # print("Servings:", recipe_node.Servings)
            # print("ImageURL:", recipe_node.ImageURL)
            # Print all fields
            
            # print("ID:", type(recipe_node.ID))
            # print("Popularity:", type(recipe_node.Popularity))
            # print("RecipeName:", type(recipe_node.RecipeName))
            # print("Description:", type(recipe_node.Description))
            # print("Ingredients:", type(recipe_node.Ingredients))
            # print("Directions:", type(recipe_node.Directions))
            # print("Category:", type(recipe_node.Category))
            # print("Nutrients:", type(recipe_node.Nutrients))
            # print("Servings:", type(recipe_node.Servings))
            # print("ImageURL:", type(recipe_node.ImageURL))

            # print("ID:", type(line[0]))
            # print("Popularity:", type(line[1]))
            # print("RecipeName:", type(line[2]))
            # print("Description:", type(line[3]))
            # print("Ingredients:", type(line[4]))
            # print("Directions:", type(line[5]))
            # print("Category:", type(line[6]))
            # print("Nutrients:", type(line[7]))
            # print("Servings:", type(line[8]))
            # print("ImageURL:", type(line[9]))
    
    # We need to sort a list of dictionaries based on list[i].get("Popularity")
    # key takes a function that takes each element of our list and returns what we want to sort on
    # def popularity_sort(node): 
    #     return node.Popularity

    # sorted(list_of_recipe_dict_nodes, key=lambda node: node.get('Popularity'))
    
    # might just do n largest
    return list_of_recipe_dict_nodes


            
            # print("URL:", node.URL)

# print(create_list_dict_nodes()[0])
