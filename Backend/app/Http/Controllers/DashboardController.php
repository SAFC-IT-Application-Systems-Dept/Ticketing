<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json(['status' => Response::HTTP_OK, 'message' => 'Successfully Login'], Response::HTTP_OK);
    }
}
