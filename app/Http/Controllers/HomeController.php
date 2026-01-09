<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $user = auth()->user()->getAttributes();
        return inertia('Dashboard', compact('user'));
    }
}
