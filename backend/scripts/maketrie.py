import heapq
class TrieNode: 
    def __init__(self, weight = -1, isWord = False):
        self.children = {}
        self.weight = weight
class Trie: 
    def __init__(self):
        self.root_node = TrieNode()
    # Milestone 1, pull in the data
    def create_list_tuples(self, list_of_dict_nodes: list[dict[str, str]]) -> list[tuple[int, str]]: 
        # Create an empty list to hold the resulting tuples
        list_of_tuples: list[tuple[int, str]] = []

        # Iterate through each dictionary in the list
        for node_dict in list_of_dict_nodes:
            # Extract the 'Popularity' field, which is a string, and convert it to an integer
            popularity_str = node_dict.get("Popularity")
            try:
                popularity = int(popularity_str)
            except (ValueError, TypeError):
                # If conversion fails, skip this entry
                continue

            # Extract the 'RecipeName' field
            recipe_name = node_dict.get("RecipeName")

            # Only add the tuple if both fields are valid
            if recipe_name is not None:
                # Create a tuple and add it to the list
                tuple_entry = (popularity, recipe_name)
                list_of_tuples.append(tuple_entry)

        # Return the completed list of tuples
        return list_of_tuples
    #(len of all combined words characters in file), O(N)
    def build_trie(self, list_of_tuples): # draw out the tree based on dynamic/hashmap and static way
        # O(word size)
        def insert(weight, word):  # weight will be popularity? 
            curr = self.root_node
            for char in word.lower(): 
                if char not in curr.children: # O(1) python hash table
                    curr.children[char] = TrieNode() # every weight would just be negative 1
                curr = curr.children.get(char)
            curr.weight = weight
        # O(number of words in file * word size)
        for weight, word in list_of_tuples: 
            insert(weight, word)
        return self.root_node
    # O(len of all combined words characters in file)
    def traverse_trie(self, node, word_accum = "", list_of_tuples = None): # pre-order traversal 
        if list_of_tuples is None: 
            list_of_tuples = []
        curr = node
        if curr.weight != -1: 
            list_of_tuples.append((curr.weight, word_accum))
        # base case
        if len(curr.children) == 0 and curr.weight != -1: 
            return list_of_tuples
        # recursive step 
        for child_key, child_node in curr.children.items(): 
            self.traverse_trie(child_node, word_accum + child_key, list_of_tuples)
        return list_of_tuples
    # O(word length + word length + len of all combined words characters in file) --> O(len of all combined words characters in file), O(N)
    def search(self, node, word_term): 
        list_of_tuples = []
        # search if prefix is in the tree 
        # O(word length)
        def valid_prefix(): 
            curr = node
            for char in word_term: 
                if char not in curr.children: 
                    return False
                curr = curr.children.get(char)
            return True           
        # return the prefix node
        # O(word length)
        def prefix_node(): 
            curr = node
            for char in word_term: 
                curr = curr.children.get(char)
            return curr
        # O(len of combined words in file)
        if valid_prefix(): 
            list_of_tuples = self.traverse_trie(prefix_node())
        return list_of_tuples
    # O(len of all combined words characters in file + len of words + k) --> O(len of all combined words characters in file), O(N)
    def top_k_values(list_of_tuples, k): # list of tuples is all the words associated with search term 
        new_k_tuple = []
        heap_list = []
        # O(len of words)
        for weight, word in list_of_tuples: 
            heap_list.append((-weight, word)) # make negative because we want a max heap
        # O(len of all combined words characters in file)? 
        heapq.heapify(heap_list)
        # O(k) VERY SMALL 
        for i in range(k): 
            weight, word = heapq.heappop(heap_list) 
            weight *= -1
            new_k_tuple.append((weight, word))  
        return new_k_tuple
    


    
