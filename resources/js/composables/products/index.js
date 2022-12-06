import axios from "axios";
import { ref } from "vue";

export default function useProduct() {


    const products = ref([]);


    const getProducts = async () => {
        let response = await axios.get('/api/products');
        //return  response.data.cartContent;
        products.value = response.data.cartContent;
        // console.log(products.value);
        // return response.data.cartContent;

    }




    const add = async (productId) => {
        let response = await axios.post('/api/products', {
            productId: productId
        });

        return response.data.products;
    };


    const getCount = async () => {

        let response = await axios.get('/api/products/count');

        return response.data.count;

    }

    const increaseQuantity = async (id) => {
        await axios.get('/api/products/increase/' + id);
    }
    const decreaseQuantity = async (id) => {

         await axios.get('/api/products/decrease/' + id);
        
    }

    const destroyProduct = async (id) => {
        await axios.delete('api/products/' + id);


    }



    return {
        add,
        getCount,
        products,
        getProducts,
        increaseQuantity,
        decreaseQuantity,
        destroyProduct
    }

}
