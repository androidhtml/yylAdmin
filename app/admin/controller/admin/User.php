<?php
// +----------------------------------------------------------------------
// | yylAdmin 前后分离，简单轻量，免费开源，开箱即用，极简后台管理系统
// +----------------------------------------------------------------------
// | Copyright https://gitee.com/skyselang All rights reserved
// +----------------------------------------------------------------------
// | Gitee: https://gitee.com/skyselang/yylAdmin
// +----------------------------------------------------------------------

// 用户管理控制器
namespace app\admin\controller\admin;

use think\facade\Request;
use app\common\validate\admin\UserValidate;
use app\common\service\admin\UserService;
use hg\apidoc\annotation as Apidoc;

/**
 * @Apidoc\Title("用户管理")
 * @Apidoc\Group("adminAuthority")
 * @Apidoc\Sort("630")
 */
class User
{
    /**
     * @Apidoc\Title("用户列表")
     * @Apidoc\Param(ref="pagingParam")
     * @Apidoc\Param(ref="sortParam")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\listParam")
     * @Apidoc\Param("username", require=false)
     * @Apidoc\Param("nickname", require=false)
     * @Apidoc\Param("email", require=false)
     * @Apidoc\Returned(ref="pagingReturn"),
     * @Apidoc\Returned("list", type="array", desc="用户列表", 
     *     @Apidoc\Returned(ref="app\common\model\admin\UserModel\listReturn")
     * )
     */
    public function list()
    {
        $page       = Request::param('page/d', 1);
        $limit      = Request::param('limit/d', 10);
        $sort_field = Request::param('sort_field/s', '');
        $sort_value = Request::param('sort_value/s', '');
        $username   = Request::param('username/s', '');
        $nickname   = Request::param('nickname/s', '');
        $email      = Request::param('email/s', '');

        $where = [];
        if ($username) {
            $where[] = ['username', 'like', '%' . $username . '%'];
        }
        if ($nickname) {
            $where[] = ['nickname', 'like', '%' . $nickname . '%'];
        }
        if ($email) {
            $where[] = ['email', 'like', '%' . $email . '%'];
        }

        $order = [];
        if ($sort_field && $sort_value) {
            $order = [$sort_field => $sort_value];
        }

        $data = UserService::list($where, $page, $limit, $order);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户信息")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\id")
     * @Apidoc\Returned(ref="app\common\model\admin\UserModel\infoReturn")
     */
    public function info()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');

        validate(UserValidate::class)->scene('info')->check($param);

        $data = UserService::info($param['admin_user_id']);
        if ($data['is_delete'] == 1) {
            exception('用户已被删除：' . $param['admin_user_id']);
        }

        return success($data);
    }

    /**
     * @Apidoc\Title("用户添加")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\addParam")
     */
    public function add()
    {
        $param['avatar_id'] = Request::param('avatar_id/d', 0);
        $param['username']  = Request::param('username/s', '');
        $param['nickname']  = Request::param('nickname/s', '');
        $param['password']  = Request::param('password/s', '');
        $param['email']     = Request::param('email/s', '');
        $param['phone']     = Request::param('phone/s', '');
        $param['remark']    = Request::param('remark/s', '');
        $param['sort']      = Request::param('sort/d', 200);

        validate(UserValidate::class)->scene('add')->check($param);

        $data = UserService::add($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户修改")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\editParam")
     */
    public function edit()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');
        $param['avatar_id']     = Request::param('avatar_id/d', 0);
        $param['username']      = Request::param('username/s', '');
        $param['nickname']      = Request::param('nickname/s', '');
        $param['email']         = Request::param('email/s', '');
        $param['phone']         = Request::param('phone/s', '');
        $param['remark']        = Request::param('remark/s', '');
        $param['sort']          = Request::param('sort/d', 200);

        validate(UserValidate::class)->scene('edit')->check($param);

        $data = UserService::edit($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户删除")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\deleParam")
     */
    public function dele()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');

        validate(UserValidate::class)->scene('dele')->check($param);

        $data = UserService::dele($param['admin_user_id']);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户重置密码")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\pwdParam")
     */
    public function pwd()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');
        $param['password']      = Request::param('password/s', '');

        validate(UserValidate::class)->scene('pwd')->check($param);

        $data = UserService::pwd($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户分配权限")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\ruleParam")
     */
    public function rule()
    {
        $param['admin_user_id']  = Request::param('admin_user_id/d', '');

        validate(UserValidate::class)->scene('rule')->check($param);

        if (Request::isGet()) {
            $data = UserService::rule($param);
        } else {
            $param['admin_role_ids'] = Request::param('admin_role_ids/a', '');
            $param['admin_menu_ids'] = Request::param('admin_menu_ids/a', '');

            $data = UserService::rule($param, 'post');
        }

        return success($data);
    }

    /**
     * @Apidoc\Title("用户是否禁用")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\disableParam")
     */
    public function disable()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');
        $param['is_disable']    = Request::param('is_disable/d', 0);

        validate(UserValidate::class)->scene('disable')->check($param);

        $data = UserService::disable($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("用户是否超管")
     * @Apidoc\Method("POST")
     * @Apidoc\Param(ref="app\common\model\admin\UserModel\superParam")
     */
    public function super()
    {
        $param['admin_user_id'] = Request::param('admin_user_id/d', '');
        $param['is_super']      = Request::param('is_super/d', 0);

        validate(UserValidate::class)->scene('super')->check($param);

        $data = UserService::super($param);

        return success($data);
    }
}
