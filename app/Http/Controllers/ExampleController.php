<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExampleController extends Controller
{
    public function index()
    {
        return Inertia::render('Example/Example', [
            'lista' => [
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5',
            ]
        ]);
    }
}
