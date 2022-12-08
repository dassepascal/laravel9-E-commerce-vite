import {ref} from "vue";

export default function useStripe() {
    //console.log('useStripe')

    const elements = ref(null);

    const clientSecret = ref(null);


    const getClientSecret = async () => {
        stripe.value = Stripe(process.env.MIX_STRIPE_TEST_PUBLIC_KEY);

        let secret = await axios.post('/paymentIntent', {
            headers: { "Content-Type": "application/json" }
        })
        .then((r) => r.data.clientSecret);

        clientSecret.value = secret;
    }
    const loadStripeElements = async () => {
        elements.value = stripe.value.elements({clientSecret: clientSecret.value});

        paymentElement.value = elements.value.create("payment");
        paymentElement.value.mount("#payment-element");
    }

         return {
            getClientSecret,
           // loadStripeElements,

         }

    }






