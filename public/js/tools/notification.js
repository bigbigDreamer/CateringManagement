// 通知用户

function notify(type, msg) {
    switch (type) {
        case 'success':
            $('body').append(
                `
       <div 
            
            class="animated slideInRight notify"
            style="width: 326px;
                   height: 90px;
                   position: absolute;
                   right: 15px;
                   box-shadow: 0 0 10px #e8e8e8;
                   color: #67c23a;
                   z-index: 999;
                   border-radius: 12px;
                   padding: 1rem 1rem 2rem 1.5rem;
                   background-color: #ffffff;
                   top: 50px;">
         <h4>成功</h4>
         <span style="color: #606266">${msg}</span>
        </div>
        `
            );

            setTimeout(function () {
                $('body .notify')
                    .removeClass('slideInRight')
                    .addClass('slideOutLeft')
                    .remove();
            },3000);
            break;
        case 'error':
            $('body').append(
                `
       <div 
            class="animated slideInRight notify"
            style="width: 326px;
                   height: 90px;
                   position: absolute;
                   right: 15px;
                   box-shadow: 0 0 10px #e8e8e8;
                   color: red;
                   z-index: 999;
                   border-radius: 12px;
                   padding: 1rem 1rem 2rem 1.5rem;
                   background-color: #ffffff;
                   top: 50px;">
         <h4>失败</h4>
         <span style="color: #606266">${msg}</span>
        </div>
        `
            );
            setTimeout(function () {
                $('body .notify')
                    .removeClass('slideInRight')
                    .addClass('slideOutLeft')
                    .remove();
            },3000);
            break;
        case 'warning':
            $('body').append(
                `
       <div 
            class="animated slideInRight notify"
            style="width: 326px;
                   height: 90px;
                   position: absolute;
                   right: 15px;
                   box-shadow: 0 0 10px #e8e8e8;
                   color: orangered;
                   z-index: 999;
                   border-radius: 12px;
                   padding: 1rem 1rem 2rem 1.5rem;
                   background-color: #ffffff;
                   top: 50px;">
         <h4>警告</h4>
         <span style="color: #606266">${msg}</span>
        </div>
        `
            );
            setTimeout(function () {
                $('body .notify')
                    .removeClass('slideInRight')
                    .addClass('slideOutLeft')
                    .remove();
            },3000);
            break;
    }
}