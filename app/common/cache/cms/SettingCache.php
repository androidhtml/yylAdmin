<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 内容设置缓存
namespace app\common\cache\cms;

use think\facade\Cache;

class SettingCache
{
    /**
     * 缓存key
     *
     * @param int $setting_id 设置id
     * 
     * @return string
     */
    public static function key($setting_id)
    {
        $key = 'cms_setting:' . $setting_id;

        return $key;
    }

    /**
     * 缓存设置
     *
     * @param int      $setting_id 设置id
     * @param array    $setting    设置信息
     * @param int|null $ttl        有效时间（秒）0永久
     * 
     * @return bool
     */
    public static function set($setting_id, $setting, $ttl = null)
    {
        $key = self::key($setting_id);
        $val = $setting;
        if ($ttl === null) {
            $ttl = 1 * 24 * 60 * 60;
        }

        $res = Cache::set($key, $val, $ttl);

        return $res;
    }

    /**
     * 缓存获取
     *
     * @param int $setting_id 设置id
     * 
     * @return array 设置信息
     */
    public static function get($setting_id)
    {
        $key = self::key($setting_id);
        $res = Cache::get($key);

        return $res;
    }

    /**
     * 缓存删除
     *
     * @param int $setting_id 设置id
     * 
     * @return bool
     */
    public static function del($setting_id)
    {
        $key = self::key($setting_id);
        $res = Cache::delete($key);

        return $res;
    }
}
