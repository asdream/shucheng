<?php

namespace App\Http\Controllers\homeRegist;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeRegisterController extends Controller
{
    //关于登陆
	public function login()
	{
		return view('shopcity.home.login');
	}
	
	
	//关于注册
	public function regist()
	{
		return view('shopcity.home.sign');
	
	}
	
}
