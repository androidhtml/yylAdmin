<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 留言管理模型
namespace app\common\model\cms;

use think\Model;
use hg\apidoc\annotation as Apidoc;

class CommentModel extends Model
{
    // 表名
    protected $name = 'cms_comment';
    // 表主键
    protected $pk = 'comment_id';

    /**
     * @Apidoc\Field("comment_id")
     */
    public function id()
    {
    }

    /**
     * @Apidoc\Field("comment_id,call,mobile,tel,title,remark,is_read,create_time,update_time,delete_time")
     */
    public function listReturn()
    {
    }

    /**
     * 
     */
    public function infoReturn()
    {
    }

    /**
     * @Apidoc\Field("call,mobile,tel,email,qq,wechat,title,content")
     */
    public function addParam()
    {
    }

    /**
     * @Apidoc\Field("comment_id,remark")
     */
    public function editParam()
    {
    }

    /**
     * @Apidoc\Field("comment")
     * @Apidoc\AddField("comment", type="array", require=true, default=" ", desc="留言列表")
     */
    public function comment()
    {
    }
}
