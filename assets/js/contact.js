$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "هيا، لديك اسم، أليس كذلك؟",
                    minlength: "يجب أن يتكون اسمك من حرفين على الأقل"
                },
                subject: {
                    required: "هيا، لديك موضوع، أليس كذلك؟",
                    minlength: "يجب أن يتكون موضوعك من 4 أحرف على الأقل"
                },
                number: {
                    required: "هيا، لديك رقم، أليس كذلك؟",
                    minlength: "يجب أن يتكون رقمك من 5 أحرف على الأقل"
                },
                email: {
                    required: "بدون بريد إلكتروني، لا يمكن إرسال الرسالة"
                },
                message: {
                    required: "امم... نعم، يجب كتابة شيء لإرسال هذا النموذج.",
                    minlength: "هل هذا كل شيء؟ حقًا؟"
                }
            },
            
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})