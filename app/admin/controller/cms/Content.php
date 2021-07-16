<?php
/*
 * @Description  : 内容管理控制器
 * @Author       : https://github.com/skyselang
 * @Date         : 2021-06-09
 * @LastEditTime : 2021-07-15
 */

namespace app\admin\controller\cms;

use think\facade\Request;
use app\common\validate\cms\ContentValidate;
use app\common\service\cms\ContentService;
use app\common\service\cms\CategoryService;
use app\common\service\UploadService;
use hg\apidoc\annotation as Apidoc;

/**
 * @Apidoc\Title("内容管理")
 * @Apidoc\Group("adminCms")
 * @Apidoc\Sort("999")
 */
class Content
{
    /**
     * @Apidoc\Title("内容分类")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned("data", type="object", desc="返回数据",
     *      @Apidoc\Returned("list", type="array", desc="数据列表", 
     *          @Apidoc\Returned(ref="app\common\model\cms\CategoryModel\list")
     *      )
     * )
     */
    public function category()
    {
        $data['list'] = CategoryService::list('tree');

        return success($data);
    }

    /**
     * @Apidoc\Title("内容列表")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="paramPaging")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\search")
     * @Apidoc\Param(ref="paramDate")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned("data", type="object", desc="返回数据",
     *      @Apidoc\Returned(ref="returnPaging"),
     *      @Apidoc\Returned("list", type="array", desc="数据列表", 
     *          @Apidoc\Returned(ref="app\common\model\cms\ContentModel\list"),
     *          @Apidoc\Returned(ref="app\common\model\cms\CategoryModel\name")
     *      )
     * )
     */
    public function list()
    {
        $page        = Request::param('page/d', 1);
        $limit       = Request::param('limit/d', 10);
        $sort_field  = Request::param('sort_field/s ', '');
        $sort_type   = Request::param('sort_type/s', '');
        $content_id  = Request::param('content_id/d', '');
        $name        = Request::param('name/s', '');
        $category_id = Request::param('category_id/d', '');
        $date_type   = Request::param('date_type/s', '');
        $date_range  = Request::param('date_range/a', []);

        validate(ContentValidate::class)->scene('sort')->check(['sort_field' => $sort_field, 'sort_type' => $sort_type]);

        $where[] = ['is_delete', '=', 0];
        if ($content_id) {
            $where[] = ['content_id', '=', $content_id];
        }
        if ($name) {
            $where[] = ['name', 'like', '%' . $name . '%'];
        }
        if ($category_id) {
            $where[] = ['category_id', '=', $category_id];
        }
        if ($date_type && $date_range) {
            $where[] = [$date_type, '>=', $date_range[0] . ' 00:00:00'];
            $where[] = [$date_type, '<=', $date_range[1] . ' 23:59:59'];
        }

        $order = [];
        if ($sort_field && $sort_type) {
            $order = [$sort_field => $sort_type];
        }

        $field = '';

        $data = ContentService::list($where, $page, $limit, $order, $field);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容信息")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\id")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned("data", type="object", desc="返回数据",
     *      @Apidoc\Returned(ref="app\common\model\cms\ContentModel\info"),
     *      @Apidoc\Returned(ref="app\common\model\cms\ContentModel\imgs"),
     *      @Apidoc\Returned(ref="app\common\model\cms\ContentModel\files"),
     *      @Apidoc\Returned(ref="app\common\model\cms\ContentModel\videos"),
     * )
     */
    public function info()
    {
        $param['content_id'] = Request::param('content_id/d', '');

        validate(ContentValidate::class)->scene('info')->check($param);

        $data = ContentService::info($param['content_id']);
        if ($data['is_delete'] == 1) {
            exception('内容已被删除：' . $param['content_id']);
        }

        return success($data);
    }

    /**
     * @Apidoc\Title("内容添加")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\add")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\imgs")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\files")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\videos")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function add()
    {
        $param['category_id'] = Request::param('category_id/d', '');
        $param['name']        = Request::param('name/s', '');
        $param['title']       = Request::param('title/s', '');
        $param['keywords']    = Request::param('keywords/s', '');
        $param['description'] = Request::param('description/s', '');
        $param['content']     = Request::param('content/s', '');
        $param['imgs']        = Request::param('imgs/a', []);
        $param['files']       = Request::param('files/a', []);
        $param['videos']      = Request::param('videos/a', []);
        $param['url']         = Request::param('url/s', '');
        $param['sort']        = Request::param('sort/d', 200);

        validate(ContentValidate::class)->scene('add')->check($param);

        $data = ContentService::add($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容修改")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\edit")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\imgs")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\files")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\videos")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function edit()
    {
        $param['content_id']  = Request::param('content_id/d', '');
        $param['category_id'] = Request::param('category_id/d', '');
        $param['name']        = Request::param('name/s', '');
        $param['title']       = Request::param('title/s', '');
        $param['keywords']    = Request::param('keywords/s', '');
        $param['description'] = Request::param('description/s', '');
        $param['content']     = Request::param('content/s', '');
        $param['imgs']        = Request::param('imgs/a', []);
        $param['files']       = Request::param('files/a', []);
        $param['videos']      = Request::param('videos/a', []);
        $param['url']         = Request::param('url/s', '');
        $param['sort']        = Request::param('sort/d', 200);

        validate(ContentValidate::class)->scene('edit')->check($param);

        $data = ContentService::edit($param);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容删除")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function dele()
    {
        $param['content'] = Request::param('content/a', '');

        validate(ContentValidate::class)->scene('dele')->check($param);

        $data = ContentService::dele($param['content']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容上传文件")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\ParamType("formdata")
     * @Apidoc\Param(ref="ParamFile")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnFile")
     */
    public function upload()
    {
        $param['type'] = Request::param('type/s', 'file');
        $param['file'] = Request::file('file');

        $param[$param['type']] = $param['file'];
        if ($param['type'] == 'image') {
            validate(ContentValidate::class)->scene('image')->check($param);
        } elseif ($param['type'] == 'video') {
            validate(ContentValidate::class)->scene('video')->check($param);
        } else {
            validate(ContentValidate::class)->scene('file')->check($param);
        }

        $data = UploadService::upload($param['file'], 'cms/content');

        return success($data, '上传成功');
    }

    /**
     * @Apidoc\Title("内容是否置顶")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\istop")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function istop()
    {
        $param['content'] = Request::param('content/a', '');
        $param['is_top']  = Request::param('is_top/d', 0);

        validate(ContentValidate::class)->scene('istop')->check($param);

        $data = ContentService::istop($param['content'], $param['is_top']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容是否热门")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\ishot")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function ishot()
    {
        $param['content'] = Request::param('content/a', '');
        $param['is_hot']  = Request::param('is_hot/d', 0);

        validate(ContentValidate::class)->scene('ishot')->check($param);

        $data = ContentService::ishot($param['content'], $param['is_hot']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容是否推荐")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\isrec")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function isrec()
    {
        $param['content'] = Request::param('content/a', '');
        $param['is_rec']  = Request::param('is_rec/d', 0);

        validate(ContentValidate::class)->scene('isrec')->check($param);

        $data = ContentService::isrec($param['content'], $param['is_rec']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容是否隐藏")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\ishide")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function ishide()
    {
        $param['content'] = Request::param('content/a', '');
        $param['is_hide'] = Request::param('is_hide/d', 0);

        validate(ContentValidate::class)->scene('ishide')->check($param);

        $data = ContentService::ishide($param['content'], $param['is_hide']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容回收站")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="paramPaging")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\search")
     * @Apidoc\Param(ref="paramDate")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned("data", type="object", desc="返回数据",
     *      @Apidoc\Returned(ref="returnPaging"),
     *      @Apidoc\Returned("list", type="array", desc="数据列表", 
     *          @Apidoc\Returned(ref="app\common\model\cms\ContentModel\list"),
     *          @Apidoc\Returned(ref="app\common\model\cms\CategoryModel\name"),
     *      )
     * )
     */
    public function recover()
    {
        $page        = Request::param('page/d', 1);
        $limit       = Request::param('limit/d', 10);
        $sort_field  = Request::param('sort_field/s ', '');
        $sort_type   = Request::param('sort_type/s', '');
        $content_id  = Request::param('content_id/d', '');
        $name        = Request::param('name/s', '');
        $category_id = Request::param('category_id/d', '');
        $date_type   = Request::param('date_type/s', '');
        $date_range  = Request::param('date_range/a', []);

        validate(ContentValidate::class)->scene('sort')->check(['sort_field' => $sort_field, 'sort_type' => $sort_type]);

        $where[] = ['is_delete', '=', 1];
        if ($content_id) {
            $where[] = ['content_id', '=', $content_id];
        }
        if ($name) {
            $where[] = ['name', 'like', '%' . $name . '%'];
        }
        if ($category_id !== '') {
            $where[] = ['category_id', '=', $category_id];
        }
        if ($date_type && $date_range) {
            $where[] = [$date_type, '>=', $date_range[0] . ' 00:00:00'];
            $where[] = [$date_type, '<=', $date_range[1] . ' 23:59:59'];
        }

        $order = [];
        if ($sort_field && $sort_type) {
            $order = [$sort_field => $sort_type];
        } else {
            $order = ['delete_time' => 'desc'];
        }

        $field = '';

        $data = ContentService::list($where, $page, $limit, $order, $field);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容回收站恢复")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function recoverReco()
    {
        $param['content'] = Request::param('content/a', '');

        validate(ContentValidate::class)->scene('dele')->check($param);

        $data = ContentService::recoverReco($param['content']);

        return success($data);
    }

    /**
     * @Apidoc\Title("内容回收站删除")
     * @Apidoc\Method("POST")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Param(ref="app\common\model\cms\ContentModel\content")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function recoverDele()
    {
        $param['content'] = Request::param('content/a', '');

        validate(ContentValidate::class)->scene('dele')->check($param);

        $data = ContentService::recoverDele($param['content']);

        return success($data);
    }
}
