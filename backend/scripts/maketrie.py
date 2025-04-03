class TrieNode:
    def __init__(self, weight = -1):
        self.children = {}
        self.weight = weight
class Trie: 
    def build_trie(list_of_tuples): # returns the root of the trie node
        root_node = TrieNode()
        def insert(weight, word): 
            curr = root_node
            for char in word: 
                if char not in curr.children:  
                    curr.children[char] = TrieNode(char)
                curr = curr.children[char]
            curr.isWord = True # reach the end of the word, that word is marked end of word
        for weight, word in list_of_tuples: 
            insert(weight, word)
        return root_node