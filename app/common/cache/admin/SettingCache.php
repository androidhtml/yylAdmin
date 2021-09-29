<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 设置管理缓存
namespace app\common\cache\admin;

use think\facade\Cache;

class SettingCache
{
    /**
     * 缓存key
     *
     * @param int $admin_setting_id 设置id
     * 
     * @return string
     */
    public static function key($admin_setting_id)
    {
        $key = 'admin_setting:' . $admin_setting_id;

        return $key;
    }

    /**
     * 缓存设置
     *
     * @param int      $admin_setting_id 设置id
     * @param array    $admin_setting    设置信息
     * @param int|null $ttl              有效时间（秒）0永久
     * 
     * @return bool
     */
    public static function set($admin_setting_id, $admin_setting, $ttl = null)
    {
        $key = self::key($admin_setting_id);
        $val = $admin_setting;
        if ($ttl === null) {
            $ttl = 1 * 24 * 60 * 60;
        }

        $res = Cache::set($key, $val, $ttl);

        return $res;
    }

    /**
     * 缓存获取
     *
     * @param int $admin_setting_id 设置id
     * 
     * @return array 设置信息
     */
    public static function get($admin_setting_id)
    {
        $key = self::key($admin_setting_id);
        $res = Cache::get($key);

        return $res;
    }

    /**
     * 缓存删除
     *
     * @param int $admin_setting_id 设置id
     * 
     * @return bool
     */
    public static function del($admin_setting_id)
    {
        $key = self::key($admin_setting_id);
        $res = Cache::delete($key);

        return $res;
    }
}
