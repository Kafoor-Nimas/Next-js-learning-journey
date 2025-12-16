import Image from "next/image";

export default function Home() {
  return (
    <>
    
   <main class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    <div class="flex justify-end px-4">
        <input type="text" class="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
    </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="border border-gray-200 p-4">
          <img class="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image">
          <h2 class="text-xl font-semibold mb-2">Post Title 1</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="border border-gray-200 p-4">
          <img class="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image">
          <h2 class="text-xl font-semibold mb-2">Post Title 2</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="border border-gray-200 p-4">
          <img class="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image">
          <h2 class="text-xl font-semibold mb-2">Post Title 3</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <!-- Add more posts here -->
    </div>
    </>
  );
}
