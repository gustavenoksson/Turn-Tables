<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    public function session(Request $request) {
        $lineItems = $request->input("lineItems");
        $stripe = new \Stripe\StripeClient(env("VITE_STRIPE_SECRET_KEY"));

        $session = $stripe->checkout->sessions->create([
            'success_url' => 'https://turntables-700c45979554.herokuapp.com/order-confirmed',
            'cancel_url' => 'https://turntables-700c45979554.herokuapp.com/cart',
            'line_items' => [
                $lineItems,
            ],
            'mode' => 'payment',
        ]);
    
        return response(['sessionId' => $session->id]);
    }
}
