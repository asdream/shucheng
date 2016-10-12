<?php

namespace App\Http\Middleware\detaildate;

use Closure;

class DetailMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       // return $next($request);
		return 'this is middleware';
		
		
		
		
    }
}
