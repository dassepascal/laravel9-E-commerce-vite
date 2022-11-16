<x-app-layout>

    <x-slot name="header">
        liste des produits
    </x-slot>
    <div class=" grid lg:grid-cols-3 gap-5">
        @foreach ( $products as $product )




        <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-8">
            <a href="#">
                <img class="rounded-t-lg" src="{{ $product->image }}" alt="">
            </a>
            <p class='flex-1 bg-yellow-100  text-center  inline-block float-right m-2 p-2 rounded-lg' > {{ $product->price }} </p>
            <div class="p-5 m-8">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $product->name
                        }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $product->description
                    }}</p>

                <add-to-cart></add-to-cart>

              {{-- <button class="bg-indigo-500 text-white p-2">Ajouter au panier</button> --}}

            </div>

        </div>






        @endforeach

    </div>

</x-app-layout>
