<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 微信设置控制器
namespace app\admin\controller;

use think\facade\Request;
use app\common\validate\SettingWechatValidate;
use app\common\service\SettingWechatService;
use hg\apidoc\annotation as Apidoc;

/**
 * @Apidoc\Title("微信设置")
 * @Apidoc\Group("adminSetting")
 * @Apidoc\Sort("520")
 */
class SettingWechat
{
    /**
     * @Apidoc\Title("公众号信息")
     * @Apidoc\Returned(ref="app\common\model\SettingWechatModel\offiInfoParam")
     * @Apidoc\Returned(ref="app\common\model\SettingWechatModel\qrcode_url")
     */
    public function offiInfo()
    {
        $data = SettingWechatService::offiInfo();

        return success($data);
    }

    /**
     * @Apidoc\Title("公众号修改")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\SettingWechatModel\offiInfoParam")
     */
    public function offiEdit()
    {
        $param['name']              = Request::param('name/s', '');
        $param['origin_id']         = Request::param('origin_id/s', '');
        $param['qrcode_id']         = Request::param('qrcode_id/d', 0);
        $param['appid']             = Request::param('appid/s', '');
        $param['appsecret']         = Request::param('appsecret/s', '');
        $param['token']             = Request::param('token/s', '');
        $param['encoding_aes_key']  = Request::param('encoding_aes_key/s', '');
        $param['encoding_aes_type'] = Request::param('encoding_aes_type/d', 1);

        validate(SettingWechatValidate::class)->scene('offiEdit')->check($param);

        $data = SettingWechatService::offiEdit($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("小程序信息")
     * @Apidoc\Returned(ref="app\common\model\SettingWechatModel\miniInfoParam")
     * @Apidoc\Returned(ref="app\common\model\SettingWechatModel\qrcode_url")
     */
    public function miniInfo()
    {
        $data = SettingWechatService::miniInfo();

        return success($data);
    }

    /**
     * @Apidoc\Title("小程序修改")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\SettingWechatModel\miniInfoParam")
     */
    public function miniEdit()
    {
        $param['name']      = Request::param('name/s', '');
        $param['origin_id'] = Request::param('origin_id/s', '');
        $param['qrcode_id'] = Request::param('qrcode_id/d', 0);
        $param['appid']     = Request::param('appid/s', '');
        $param['appsecret'] = Request::param('appsecret/s', '');

        validate(SettingWechatValidate::class)->scene('miniEdit')->check($param);

        $data = SettingWechatService::miniEdit($param);

        return success($data);
    }
}
