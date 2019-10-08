// 对于顾客模块的数据处理

var customerData = {
    dataProcess: function (type, data) {
        var result = '';
        switch (type) {
            case 'realname':
                result = !data ? '未命名' : data;
                break;
            case 'telephone':
                result = !data ? '未填写' : data;
                break;
            case 'password':
                result = !data ? '未设定' : data;
                break;
            case 'status':
                result = !data ? '不正常' : data;
                break;
            case 'photo':
                result = !data ? '未上传' : data;
                break;
            default:
                console.log('匹配无效');
        }
        return result;
    },
    dataInit: function () {
        $('tbody').empty();
        customer.findAll(function (data) {
            var template = '';
            data.data.map(function (item, index) {
                template +=
                    `
           <tr data-id="${item.id}">
                <th scope="row">
                    <input type="checkbox" value="${item.id}"/>
                </th>
                <td style="width: 150px">
                <span class="currentData">
                 ${customerData.dataProcess('realname', item.realname)}
                </span>
                <input type="text"
                       class="form-control inputData form-control-sm"
                       name="realname"
                       value="${customerData.dataProcess('realname', item.realname)}"
                       placeholder="请输入真实姓名"/>
                </td>
                <td>
                <span class="currentData">
                 ${customerData.dataProcess('telephone', item.telephone)}
                </span>
                <input type="text"
                       class="form-control inputData form-control-sm"
                       name="telephone"
                       value=" ${customerData.dataProcess('telephone', item.telephone)}"
                       placeholder="请输入电话号码"/>
                </td>
                <td>
                <span class="currentData">
                 ${customerData.dataProcess('password', item.password)}
                </span>
                <input type="text"
                       class="form-control inputData form-control-sm"
                       name="password"
                       value=" ${customerData.dataProcess('password', item.password)}"
                       placeholder="请输入密码"/>
                </td>
                <td>
                <span class="currentData">
                 ${customerData.dataProcess('status', item.status)}
                </span>
                <input type="text"
                       class="form-control inputData form-control-sm"
                       value="${customerData.dataProcess('status', item.status)}"
                       name="status"
                       placeholder="请输入状态"/>
                </td>
                <td>
                <span class="currentData">
                ${customerData.dataProcess('photo', item.photo)}
                </span>
                <input type="text"
                       class="form-control inputData form-control-sm"
                       value="${customerData.dataProcess('photo', item.photo)}"
                       name="photo"
                       placeholder="请输入图片地址"/>
                </td>
                <td>
                    <button
                        class="btn btn-primary btn-sm updateBtn"
                        data-id="${item.id}">修改</button>
                    <button
                        class="btn btn-danger btn-sm deleteBtn"
                        data-id="${item.id}">删除</button>
                </td>
            </tr>
                    `
            });

            $('tbody').append(template);
            PubSub.publish('appendFinished', true);
        })
    },
    deleteById: function () {
        $('.deleteBtn').on('click', function () {
            customer.deleteById($(this).attr('data-id'), function (data) {
                // console.log(data);
                if (data.status === 200) {
                    notify('success', '删除成功了！');
                    customerData.dataInit();
                }
                notify('error', '删除失败，服务器故障');
            });
        })
    },
    update: function () {
        $('.updateBtn').on('click', function () {
            if ($(this).text() === '保存') {
                $(this).text('修改');
                $(`tr[data-id="${$(this).attr('data-id')}"] .inputData`).hide();
                $(`tr[data-id="${$(this).attr('data-id')}"] .currentData`).show();
                $(this).removeClass('saveBtn');
                var obj = {};
                obj.id
                    = $(this).attr('data-id');
                obj.realname
                    = $(`tr[data-id="${$(this).attr('data-id')}"]  input[name="realname"]`).val();
                obj.telephone
                    = $(`tr[data-id="${$(this).attr('data-id')}"]  input[name="telephone"]`).val();
                obj.password
                    = $(`tr[data-id="${$(this).attr('data-id')}"]  input[name="password"]`).val();
                obj.status
                    = $(`tr[data-id="${$(this).attr('data-id')}"]  input[name="status"]`).val();
                obj.photo
                    = $(`tr[data-id="${$(this).attr('data-id')}"]  input[name="photo"]`).val();
                customer.saveOrUpdate(obj, function (data) {
                    console.log(data);
                    if (data.status === 200) {
                        customerData.dataInit();
                    }
                })
            } else {
                $(this).text('保存');
                $(this).addClass('saveBtn');
                $(`tr[data-id="${$(this).attr('data-id')}"] .currentData`).hide();
                $(`tr[data-id="${$(this).attr('data-id')}"] .inputData`).show();
            }
        })
    },
    batchDelete: function () {
        $('.delAll').on('click', function () {
            var checkedList = [];
            $("input[type='checkbox']:checked").each(function (index, item) {
                // console.log(Number.parseInt(item.value));
                if (!Number.isNaN(Number.parseInt(item.value))) {
                    checkedList.push(item.value);
                }

            });

            customer.batchDelete(checkedList, function (data) {
                console.log(data);
                if (data.status === 200) {
                    notify('success', '批量删除成功！！！');
                    customerData.dataInit();
                } else {
                    notify('error', '服务器故障！！！');
                }

            });

            // console.log(checkedList);
        });

        $('.selectAll').on('change', function () {
            if ($(this).prop('checked')) {
                $("input[type='checkbox']:not(:checked)").trigger('click');
            } else {
                $("input[type='checkbox']:checked").trigger('click');
            }
        });
    }

};

