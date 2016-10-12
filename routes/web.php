<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */


//关于商城首页
 Route::get('/',function(){
	return view('shopcity/web');
 
 
 });
 
 
 
/*  //关于前台登陆
 Route::get('/login','HomeRegist\HomeRegisterController@login');
 
//关于前台注册
 Route::get('/regist','HomeRegist\HomeRegisterController@regist');
  */
 
 
 
 
 
 
 /**********************大分类页面开始********************/
 Route::get('/wenyi',function(){
	return view('shopcity.bigtype.wenyi');
 });
 
 
 
 
 
 
 

  /**********************分类页面结束********************/
 
 
  /**********************单个具体页面开始********************/
 Route::get('/shu/{id}',function(){
	
	//return 'hello world';
	return view('shopcity.books.shu');
 
 });
  
  
  
  
  
   /**********************单个具体页面结束********************/
 
 /**********这是路由组*********/
/*  Route::group(['prefix'=>'home','middleware'=>'detaildate\Detail'],function(){
	
	Route::get('/infor',function(){
	return view('infor.index');
 
 }); 
 

	
 
 });
   */
 
 
 Route::get('find',function () {
	return view('find');
});
Route::get('login',"LoginController@login");
Route::post('dologin','LoginController@dologin');
Route::get("captcha/{tmp}","LoginController@captcha");
Route::get('sign',"SignController@sign");
Route::post('dosign','SignController@dosign');
Route::get('check/{tmp}','SignController@checkUname');
Route::get('payfotemr',function () {
	return view('payfor');
});
 
 
 
 
 
 
 
 
 
 /********************个人信息开始************************************/
  Route::get('/infor',function(){
	return view('infor.index');

 });  
 
 /********************个人信息结束************************************/
 
 /********************购物车开始************************************/
 Route::get('/mycar',function(){
 
	return view('mycar.index');
 });
 
 
 
 
  /********************购物车结束************************************/

  /****************************res账户余额开始***************************************/
  Route::get("/res",function(){
 
	return view('res.index');
 });
  
  
    /****************************res结束***************************************/
  
  
   /****************************disc我的评论开始***************************************/
  Route::get('/disc',function(){
 
	return view('disc.index');
 });
  
  
    /****************************disc结束***************************************/
	
	
	
	
	
	
	
	
  