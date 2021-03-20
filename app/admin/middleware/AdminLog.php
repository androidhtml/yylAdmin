<?php
/*
 * @Description  : 日志中间件
 * @Author       : https://github.com/skyselang
 * @Date         : 2020-05-06
 * @LastEditTime : 2021-03-20
 */

namespace app\admin\middleware;

use Closure;
use think\Request;
use think\Response;
use think\facade\Config;
use app\admin\service\AdminLogService;

class AdminLog
{
    /**
     * 处理请求
     *
     * @param Request $request
     * @param Closure $next
     * @return Response
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $is_log = Config::get('admin.is_log', false);

        if ($is_log) {
            $admin_user_id = admin_user_id();

            if ($admin_user_id) {
                $response_data = $response->getData();
                if (isset($response_data['code'])) {
                    $admin_log['response_code'] = $response_data['code'];
                }
                if (isset($response_data['msg'])) {
                    $admin_log['response_msg'] = $response_data['msg'];
                } else {
                    if (isset($response_data['message'])) {
                        $admin_log['response_msg'] = $response_data['message'];
                    }
                }
                $admin_log['admin_user_id'] = $admin_user_id;
                AdminLogService::add($admin_log);
            }
        }

        return $response;
    }
}
