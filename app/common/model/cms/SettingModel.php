<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 内容设置模型
namespace app\common\model\cms;

use think\Model;
use hg\apidoc\annotation as Apidoc;

class SettingModel extends Model
{
    // 表名
    protected $name = 'cms_setting';
    // 表主键
    protected $pk = 'setting_id';

    /**
     * @Apidoc\WithoutField("setting_id")
     */
    public function infoReturn()
    {
    }

    /**
     * @Apidoc\WithoutField("setting_id,create_time,update_time")
     */
    public function editParam()
    {
    }
}
