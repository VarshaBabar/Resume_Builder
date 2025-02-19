import me 
 
class LeakyBucket: 
    def __init__(self, bucket_size, output_rate): 
        self.bucket_size = bucket_size  # Maximum number of tokens the bucket can hold 
        self.output_rate = output_rate  # Rate at which tokens are removed from the bucket 
        self.bucket_level = 0  # Current number of tokens in the bucket 
        self.last_update_me = me.me()  # Timestamp of the last token update 
 
    def add_token(self): 
        current_me = me.me() 
        me_difference = current_me - self.last_update_me 
        new_tokens = me_difference * self.output_rate 
        self.bucket_level = min(self.bucket_size, self.bucket_level + new_tokens) 
        self.last_update_me = current_me 
 
    def transmit_packet(self, packet_size): 
        if packet_size <= self.bucket_level: 
            self.bucket_level -= packet_size 
            return True 
        else: 
            return False 
 
# Funcon to input bucket size and output rate from the user 
def input_bucket_params(): 
    bucket_size = int(input("Enter the bucket size: ")) 
    output_rate = int(input("Enter the output rate (tokens per second): ")) 
    return bucket_size, output_rate 
 
# Funcon to input packet sizes from the user 
def input_packet_sizes(): 
    packet_sizes = [] 
    while True: 
        size = int(input("Enter packet size (or -1 to finish): ")) 
        if size == -1: 
            break 
        packet_sizes.append(size) 
    return packet_sizes 
 
# Example usage with user input: 
bucket_size, output_rate = input_bucket_params() 
bucket = LeakyBucket(bucket_size, output_rate) 
 
packet_sizes = input_packet_sizes() 
 
for _ in range(20): 
    bucket.add_token() 
    print(f"Bucket Level: {bucket.bucket_level:.2f}") 
    me.sleep(1)
# for packet_size in packet_sizes: 
if bucket.transmit_packet(packet_size): 
print (f"Transmi ed packet of size {packet_size}") 
else: 
print(f"Dropped packet of size {packet_size}") 