<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Gregwar\Captcha\CaptchaBuilder;//使用验证码的类

class LoginController extends Controller
{
    //
	 //登录表单
    public function login()
    {
    	return view("login");
    }
    //执行登录
    public function dologin(Request $request)
    {
    	//验证码
    	$mycode = session()->get('code');
    	if($mycode!=$request->input('code')){
    		return back()->with("msg",'验证码错误');
    	}
    	//用户名
    	$uname = $request->input('uname');
    	$pword = $request->input('pword');
    	$ob = \DB::table('user')->where("username",$uname)->first();
    	if($ob){
    		if($ob->password == $pword){
    			session()->set("adminuser",$ob);
    			return "欢迎老板！";
    		}
            // sessioin()->set('msg',"用户名或密码错误");
    		return back()->with('msg',"用户名或密码错误");

    	}
        // sessioin()->set('msg',"用户名或密码错误");
    	return back()->with('msg',"用户名或密码错误");
    	
    }

    //验证码
    public function captcha($tmp)
    {
    	//生成验证码图片的Builder对象，配置相应属性
    	$builder = new CaptchaBuilder;
    	//可以设置图片宽高及字体
    	$builder->build($width = 100,$height = 40,$font = null);
    	//获取验证码的内容
    	$phrase = $builder->getPhrase();
    	//把内容存入session
    	session()->flash('code',$phrase);
    	//生成图片
        return response($builder->output())->header('Content-Type','image/jpeg');
    }

    //执行退出
    public function logout()
    {
    	//释放session
    	session()->forget('adminuser');
    	//重定向
    	return redirect('login');
    }
}
