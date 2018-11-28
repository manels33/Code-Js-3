/**
 * Mdsoft INT
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2017 MDWEB. (http://www.mdweb-int.com)
 * @author      BESSROUR Ahmed (ahmed.bessrour@gmail.com)
 * @author      Sassi Manel (manel.sassi33@gmail.com)
 */


var $ = jQuery.noConflict();

var isMobile = window.matchMedia("only screen and (max-width: 479px)");

/* =========================================================
 Back to top
 ============================================================ */
$(".back-top").hide();
// fade in #back-top
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


/* =========================================================
 Height auto
 ============================================================ */

$(function() {

    heightAuto();

    function heightAuto() {
        height = $(window).height() - $("header").height() - 50;
    }

    $('#main-content').css('min-height', height).css({
        'min-height': height
    });

    $(window).resize(function() {
        heightAuto();
    });

});

/* =========================================================
 Numbers only
 ============================================================ */

function numbersOnly(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


/**
 * Attach addSpaces to Object prototype
 */

Object.__proto__.addSpaces = function() {
    console.trace('addSpaces Method');
    var index = 0;
    $('.inputWithSpace').on('keyup', function(event) {
        console.log('keyup', this.value.length);
        var key = event.which || event.keyCode || event.charCode;
        if (key !== 8 && key !== 37 && key !== 38 && key !== 39 && key !== 40) {
            index++;
            if (index == 2) {
                console.log('inside');
                var reformat = this.value.replace(/(\d{2}\s*)/g, function(match) {
                    if (match.match(/\s/)) { return match; }
                    return match + " ";
                });
                this.value = reformat.replace(/\s*$/, "");
                index = 0;
            }
        }
    });
};


/* =========================================================
 Menu
 ============================================================ */

/* Mega Overlay
------------------------------*/
(function megaMenuOverlay() {
    $('.overlayerhover').on('hover', function() {
        if ($(this).hasClass('o-hropen')) {
            $('.o-hrmenu-overlay').css("display", "none").fadeOut();
        } else {
            $('.o-hrmenu-overlay').css("display", "block").fadeIn();
        }
    });
})();

/* =========================================================
 Menu mobile
 ============================================================ */

/*--------------------- Mobile menu ------------------------------*/
$('.adzmegamenu-icon').on('click', function() {
    $('.logo').addClass('afich');
    $('#o-spmenu-overlay').on('click', function() {
        $('.logo').removeClass('afich');
    });
});

/* -------------------- Collapsing menu ------------------------------*/
$('.collapsing-menu a').click(function() {
    $(this).parent().parent().find('ul')
        .not($(this).parent().children('ul'))
        .slideUp('fast')
        .parent('.expanded').toggleClass('expanded', 'collapsed');
    $(this).parent().children('ul')
        .slideToggle('fast')
        .parent()
        .toggleClass('expanded', 'collapsed');
    if ($(this).parent().children('ul').parent().find('i').hasClass('fa-angle-right')) {
        $(this).parent().children('ul')
            .parent()
            .find('i')
            .removeClass('fa-angle-right')
            .addClass('fa-angle-down');
    } else {
        $(this).parent().children('ul')
            .parent()
            .find('i')
            .removeClass('fa-angle-down')
            .addClass('fa-angle-right');
    }

});

/* =========================================================
 Transfert
 ============================================================ */


if (jQuery('.md-transfert').length) {

    var data = [{
        "name": "John Doe 1",
        "num": "0533554571"
    }, {
        "name": "John Doe 2",
        "num": "0533554572"
    }, {
        "name": "John Doe 3",
        "num": "0533554573"
    }, {
        "name": "John Doe 4",
        "num": "0533554574"
    }, {
        "name": "John Doe 5",
        "num": "0533554575"
    }, {
        "name": "John Doe 6",
        "num": "0533554576"
    }, {
        "name": "John Doe 7",
        "num": "0533554577"
    }, {
        "name": "John Doe 8",
        "num": "0533554578"
    }];

    var names = new Bloodhound({
        datumTokenizer: function(data) {
            return Bloodhound.tokenizers.whitespace(data.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: data
    });


    var nums = new Bloodhound({
        datumTokenizer: function(data) {
            return Bloodhound.tokenizers.whitespace(data.num);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: data
    });


    names.initialize();
    nums.initialize();


    /**
     *
     * @formIndex {number} : newly added form index
     * @transfertConstructor {object} : object that contains form addition methods
     */
    var formIndex = 1,
        validForms = 0,
        transfertConstructor = {
            wilayas: [
                'Adrar',
                'Chlef',
                'Laghouat',
                'Oum El Bouaghi',
                'Batna',
                'Béjaïa',
                'Biskra',
                'Béchar',
                'Blida',
                'Bouira',
                'Tamanrasset',
                'Tébessa',
                'Tlemcen',
                'Tiaret',
                'Tizi Ouzou',
                'Alger',
                'Djelfa',
                'Jijel',
                'Sétif',
                'Saïda',
                'Skikda',
                'Sidi Bel Abbès',
                'Annaba',
                'Guelma',
                'Constantine',
                'Médéa',
                'Mostaganem',
                'M\'Sila',
                'Mascara',
                'Ouargla',
                'Oran',
                'El Bayadh',
                'Illizi',
                'Bordj Bou Arreridj',
                'Boumerdès',
                'El Tarf',
                'Tindouf',
                'Tissemsilt',
                'El Oued',
                'Khenchela',
                'Souk Ahras',
                'Tipaza',
                'Mila',
                'Aïn Defla',
                'Naâma',
                'Aïn Témouchent',
                'Ghardaïa',
                'Relizane'
            ],
            numero: ['0533554578', '0533554577', '0533554576', '0533554574', '0533554572',
                '0333554578', '0333554577', '0333554576', '0333554575', '0333554574'
            ],
            spaceTheNumber: function(str, cond) {
                var r = '';
                if (cond) {
                    for (i = 0; i < 40; i++) {
                        r = "<span style='color:red'>" + str.substr(0, 2) + "</span> " + str.substr(2, 2) + " " + str.substr(4, 2) + " " + str.substr(6, 2) + " " + str.substr(8, 2);
                    }
                } else {
                    for (i = 0; i < 40; i++) {
                        r = str.substr(0, 2) + " " + str.substr(2, 2) + " " + str.substr(4, 2) + " " + str.substr(6, 2) + " " + str.substr(8, 2);
                    }
                }
                return r;
            },
            substringMatcher: function(strs) {
                return function findMatches(q, cb) {
                    var matches, substrRegex;
                    // an array that will be populated with substring matches /
                    matches = [];
                    // regex used to determine if a string contains the substring `q` /
                    substrRegex = new RegExp(q, 'i');
                    /**
                     * iterate through the pool of strings and for any string that
                     * contains the substring `q`, add it to the `matches` array
                     */
                    $.each(strs, function(i, str) {
                        var str1 = str,
                            r;

                        for (i = 0; i < 40; i++) {
                            r = "<span style='color:red'>" + str1.substr(0, 2) + "</span> " + str1.substr(2, 2) + " " + str1.substr(4, 2) + " " + str1.substr(6, 2) + " " + str1.substr(8, 2);
                        }
                        if (substrRegex.test(str)) {
                            /**
                             * the typeahead jQuery plugin expects suggestions to a
                             * JavaScript object, refer to typeahead docs for more info
                             */
                            matches.push({ value: r });
                        }
                    });
                    cb(matches);
                };
            },
            checkLength: function() {
                var numElem = $('.transfert-content').length;
                if (numElem <= 1) {
                    $('.remove').css("display", "none");
                } else {
                    $('.remove').css("display", "block");
                }
                $('.directiveId').each(function(index, el) {
                    var val = index + 1;
                    $(el).html(val);
                });
            },
            totalMontant: function() {
                $('.totalInt, .totalSum').text($.map($('input[id^="montant"]'), function(elem, i) {
                    return parseInt(elem.value, 10) || 0;
                }).reduce(function(a, b) {
                    return a + b;
                }, 0));
            },
            uniqueCheckbox: function() {
                $('.material-switch input').on('change', function() {
                    var parent = $(this).parents('.switch-wrapper');
                    parent.find('input').not(this).prop('checked', false);
                });
            },
            template: function(id) {
                return '<div class="transfert-content"><form id="transfert-form' + id + '" method="post" class="form-transfert"><div class="row"><div class="col-sm-1 col-xs-12"><span class="directiveId">1</span></div><div class="col-sm-7 col-sm-offset-2 col-xs-12"><p>Veuillez insérer le numéro Ooredoo</p><div class="form-group clearfix"><input type="text" name="numero" id="input" class="form-control inputWithSpace" required="required" minlength="10" maxlength="14"></div><p>Veuillez saisir le montant</p><div class="form-group clearfix"><input type="text" name="montant" id="montant" class="form-control" value="" required="required" onkeypress="return numbersOnly(event)"><span class="da">DA</span></div><div class="form-inline switch-wrapper"><div class="form-group"><div class="material-switch"><input id="paye' + id + '" name="paye' + id + '" type="checkbox" /><label for="paye' + id + '" class="label-default"></label></div><div class="material-switch-title"><p>Payé</p></div></div><div class="form-group"><div class="material-switch"><input id="credit' + id + '" name="credit' + id + '" type="checkbox" /><label for="credit' + id + '" class="label-default"></label></div><div class="material-switch-title"><p>Crédit</p></div></div></div></div><span class="remove"></span></div></form></div>';
            },
            compile: function() {
                this.checkLength();
                this.totalMontant();
                this.uniqueCheckbox();
                this.addSpaces();
            },
            init: function(elem) {
                elem
                    .find('input[name="numero"]')
                    .typeahead({
                        hint: false,
                        highlight: true,
                        minLength: 1
                    }, {
                        name: 'names',
                        displayKey: 'name',
                        source: names.ttAdapter(),
                        templates: {
                            suggestion: function(data) {
                                console.log('data', data);
                                return $("<div />", {
                                    "html": "<div class='cleafix'>" +
                                        data.name +
                                        "<br />" + transfertConstructor.spaceTheNumber(data.num, true) +
                                        "</div>"
                                });
                            }
                        }
                    }, {
                        name: 'nums',
                        displayKey: 'num',
                        source: nums.ttAdapter(),
                        templates: {
                            suggestion: function(data) {
                                return $("<div />", {
                                    "html": "<div class='cleafix'>" +
                                        data.name +
                                        "<br />" + transfertConstructor.spaceTheNumber(data.num, true) +
                                        "</div>"
                                });
                            }
                        }
                    })
                    .on('typeahead:selected', function(e, suggestion, dataSetName) {
                        /* Revalidate the state field */
                        elem.formValidation('revalidateField', 'numero');
                        $(this).typeahead('val', transfertConstructor.spaceTheNumber(suggestion.num, false));
                    })
                    .on('typeahead:closed', function(e) {
                        /* Revalidate the numero field */
                        elem.formValidation('revalidateField', 'numero');
                    });


                elem
                    .formValidation({
                        framework: 'bootstrap',
                        icon: {
                            valid: 'fa fa-check',
                            invalid: 'fa fa-exclamation-triangle',
                            validating: 'fa fa-refresh'
                        },
                        err: {
                            container: 'tooltip'
                        },
                        fields: {
                            numero: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    },
                                    stringLength: {
                                        message: 'la valeur doit être compris entre 10 et 14 caractères',
                                        between: {
                                            min: 10,
                                            max: 14,
                                            message: 'la valeur doit être compris entre 10 et 14 caractères'
                                        }
                                    },
                                    callback: {
                                        message: 'Numéro invalide',
                                        callback: function(value, validator, $field) {
                                            if (value.match("^05") || value.match("^06")) {
                                                return {
                                                    valid: true,
                                                    message: 'Numéro invalide'
                                                };
                                            } else {
                                                return false;
                                            }
                                        }
                                    }
                                }
                            },
                            montant: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    },
                                    regexp: {
                                        regexp: '^[0-9]',
                                        message: "Number required"
                                    }
                                }
                            }
                        }
                    })
                    .on('success.form.fv', function(e) {
                        $(e.target).data('formValidation');
                    });
            },
            validNumber: function(str) {
                var valid = false;
                for (var i = 0, len = data.length; i < len; i++) {
                    if (data[i].num === str.replace(/ /g, '')) {
                        valid = true;
                        break;
                    }
                }
                return valid;
            },
            addSpaces: function() {
                var index = 0;
                $('.inputWithSpace').on('keyup', function(event) {
                    var key = event.which || event.keyCode || event.charCode;
                    if (key !== 8 && key !== 37 && key !== 38 && key !== 39 && key !== 40) {
                        index++;
                        if (index == 2) {
                            var reformat = this.value.replace(/(\d{2}\s*)/g, function(match) {
                                if (match.match(/\s/)) { return match; }
                                return match + " ";
                            });
                            this.value = reformat;
                            index = 0;
                        }
                    }
                });
            }
        };
    console.log('transfertConstructor', transfertConstructor);
    window.addSpaces = transfertConstructor.addSpaces;

    // Render first form

    $(document).ready(function() {
        transfertConstructor.init($('#transfert-form'));
        transfertConstructor.checkLength();
        transfertConstructor.uniqueCheckbox();
        transfertConstructor.addSpaces();
        $.map($('.transfert-content'), function(elem, i) {
            $(elem).find('form').data('formValidation').resetForm(true);
        });
    });


    $(document).on('click', '.addForm', function(e) {
        e.preventDefault();
        // Get Number of forms to add then append it to the DOM
        var elem = $('.numbers-row').find('input').val();
        for (var i = 0; i < elem; i++) {
            $('.wrapper').append(transfertConstructor.template(formIndex));
            formIndex++;
        }
        // Loop through
        $.map($('.transfert-content'), function(elem, i) {
            if ($(elem).find('form').attr('id') !== 'transfert-form') {
                transfertConstructor.init($(elem).find('form'));
            }
            $(elem).find('form').find('#montant').keyup(function() {
                transfertConstructor.totalMontant();
            });
        });

        $('#montant').keyup(function() {
            transfertConstructor.totalMontant();
        });
        // Re-render page
        transfertConstructor.compile();
        // reset add number
        $('.numbers-row').find('input').val('1');
    });

    $(document).on('click', '.remove', function(e) {
        e.preventDefault();
        // remove chosen form
        $(this).parents('.transfert-content').fadeOut("slow", function() {});
        $(this).parents('.transfert-content').remove();
        // Re-render page
        transfertConstructor.compile();
    });

    /**
     * change montant sum
     */

    $('#myModal').on('show.bs.modal', function() {
        transfertConstructor.totalMontant();
    });


    $('#montant').keyup(function() {
        transfertConstructor.totalMontant();
    });
    var clientsToAdd = [];
    $('.validateForms').on('click', function() {
        var number = '',
            count = 0;
        clientsToAdd = [];
        $.map($('.transfert-content'), function(elem, i) {
            number = $(elem).find("input[name='numero']").val().replace(/ /g, '');
            if (number !== '' && !transfertConstructor.validNumber(number) && number.length <= 10 && clientsToAdd.indexOf(number) == -1)
                clientsToAdd.push(number);
            console.log('clientsToAdd', clientsToAdd);
            $(elem).find('form').data('formValidation').validate();
            validForms = $(elem).find('form').data('formValidation').isValid();
            console.log('validForms', validForms, i);
            if (!validForms) {
                count++;
            }
            console.log('count', count);
        });

        if (count === 0 || clientsToAdd.length !== 0) {
            console.log(clientsToAdd.length);
            if (clientsToAdd.length === 0) {
                $('#myModal').modal('show');
            } else {
                // userTemplate
                var userTemplate = $("#userTemplate").html();
                $(".wizard-target").html(_.template(userTemplate));
                // console.log(clientsToAdd[0]);
                $('#add-client-modal').modal('show');
                // clientsToAdd.shift();
                $('#add-client-modal').on('hide.bs.modal', function() {
                    $.map($('.transfert-content'), function(elem, i) {
                        $(elem).find('form').data('formValidation').resetForm();
                    });
                });
                $('#rootwizard').bootstrapWizard({
                    onTabChange: function() {
                        console.log('onTabChange');
                    },
                    onNext: function(tab, navigation, index) {
                        var numTabs = $('#rootwizard').find('.tab-pane').length;
                        if (index === numTabs) {
                            console.log('last tab');
                            $('#add-client-modal').modal('hide');
                        }
                    }
                });
                $.map($('.tab-pane'), function(elem) {
                    var number = $(elem).find('.pdv-number').val();
                    $(elem).find('form').formValidation({
                            framework: 'bootstrap',
                            icon: {
                                valid: 'fa fa-check',
                                invalid: 'fa fa-exclamation-triangle',
                                validating: 'fa fa-refresh'
                            },
                            err: {
                                container: 'tooltip'
                            },
                            fields: {
                                'number-pdv': {
                                    validators: {
                                        notEmpty: {
                                            message: 'Ce champ est obligatoire'
                                        }
                                    }
                                },
                                'name-pdv': {
                                    validators: {
                                        notEmpty: {
                                            message: 'Ce champ est obligatoire'
                                        }
                                    }
                                }
                            }
                        })
                        .on('success.form.fv', function(e) {
                            e.preventDefault();
                            var name = $(e.target).find('.name-pdv').val(),
                                number = $(e.target).find('.pdv-number').val().replace(/ /g, ''),
                                client = {
                                    "name": name,
                                    "num": number
                                };
                            // Add new client to typeahead search engine
                            data.push(client);
                            names.add([client]);
                            nums.add([client]);
                            // Go to next step
                            $('#rootwizard').bootstrapWizard('next');
                        });

                    $(elem).find('.pdv-number').attr('value', transfertConstructor.spaceTheNumber(number));
                    $(elem).find('.next').on('click', function(e) {
                        e.preventDefault();
                        $('#rootwizard').bootstrapWizard('next');
                    });
                    // init selectpickers
                    $(elem).find('.selectpicker-wilaya').selectpicker();
                    $(elem).find('.selectpicker-commune').selectpicker();

                });
            }
        }

    });

    /**-------------**/

}


/* =========================================================
 Historique
 ============================================================ */

if (jQuery('.md-historique').length) {

    Object.addSpaces();

    function checkSum() {
        $('.credit-sum').text($.map($('.price'), function(elem, i) {
            if (!$(elem).parents('tr').hasClass('filtered'))
                return parseInt($(elem).text().replace(/ /g, ''), 10) || 0;
        }).reduce(function(a, b) {
            return a + b;
        }, 0));
    }

    checkSum();

    /*--------------------------------Search form----------------*/
    function searchStock() {
        var input, input2;
        input = document.getElementById("nomClient").value;
        input2 = document.getElementById("numero").value;
        date1 = document.getElementById("dateDebut").value;
        date2 = document.getElementById("dateFin").value;

        console.log('date1', date1);
        console.log('date2', date2);
        if (date1 === "" && date2 !== "") {
            filtersDate = "<=" + date2;
        } else
        if (date1 !== "" && date2 === "") {
            filtersDate = ">=" + date1;
        } else if (date1 === "" && date2 === "") {
            filtersDate = "";
        } else if (date1 === date2) {
            filtersDate = date1;
        } else {
            filtersDate = date1 + " - " + date2;
        }
        console.log('input2', input2);


        var $table = $("#myTable"),
            columns = ['', '', input, input2, filtersDate];

        console.log('test', columns);
        $table.trigger('search', [columns]);


        checkSum();
    }



    $('.adv-search').click(function() {
        $('.adv-search-text').toggleClass("showSearch");
    });
    /*--------------------------------tablesorter----------------*/

    var date1, date2,
        today = new Date();

    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: true },
            5: { sorter: true },
            6: { sorter: true },
            7: { sorter: true }
        },
        widgets: ['zebra', 'filter']
    });



    $("#myTable").bind("sortEnd", function() {
        console.log('sortEnd');
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    $("#myTable").bind("filterEnd", function() {
        var sortable = $(this).find('.first').parent(),
            elems = [];
        sortableElems = $.map(sortable, function(elem, i) {
            if (!$(elem).hasClass('filtered')) {
                elems.push(elem);
            }
        });
        $.map(elems, function(elem, i) {
            $(elem).find('.first').text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    /*--------------------------------selectpicker----------------*/
    var inputs = $('.selectpicker');
    var query = {};

    $('.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });

    $('#datetimepicker1').datetimepicker({
        format: 'MMM DD, YYYY',
        ignoreReadonly: true
    });

    $('#datetimepicker2').datetimepicker({
        format: 'MMM DD, YYYY',
        ignoreReadonly: true,
        useCurrent: false
    });
    $("#datetimepicker1").on("dp.change", function(e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function(e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
}


/* =========================================================
 Login 1
 ============================================================ */

if (jQuery('.md-login-1').length) {
    $('#login-1-form').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {
            numero: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    },
                    regexp: {
                        regexp: '^0[5-6][0-9]{8}$',
                        message: "Numéro invalide"
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {
        e.preventDefault();
        console.log('success.form.fv');
    });
}

/* =========================================================
 Login 2
 ============================================================ */

if (jQuery('.md-login-2').length) {
    $('#login-2-form').formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            fields: {
                codePin: {
                    validators: {
                        identical: {
                            field: 'confirmCode',
                            message: 'Le code saisi est incorrect'
                        },
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        }
                    }
                }
            }
        })
        .on('err.validator.fv', function(e, data) {
            // $(e.target)    --> The field element
            // data.fv        --> The FormValidation instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('fv.messages')
                // Hide all the messages
                .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-fv-validator="' + data.validator + '"]').show();
        })
        .on('success.form.fv', function(e) {
            e.preventDefault();
            console.log('success.form.fv');
        });

    $('.code').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.addClass('waiting').attr('disabled', true);
        setTimeout(function() {
            $this.removeClass('waiting').attr('disabled', false);
        }, 5000);
    });
}

/* =========================================================
 Login 5
 ============================================================ */

if (jQuery('.md-login-5').length) {
    $('#login-5-form').formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            fields: {
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        },
                        stringLength: {
                            message: 'Le mot de passe doit contenir 5 caractères au minimum',
                            min: function(value, validator, $field) {
                                return 5 - (value.match(/\r/g) || []).length;
                            }
                        }
                    }
                },
                confirmPassword: {
                    validators: {

                        identical: {
                            field: 'password',
                            message: 'Les deux mots de passe ne sont pas identiques '
                        },
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        },
                        stringLength: {
                            message: 'Le mot de passe doit contenir 5 caractères au minimum',
                            min: function(value, validator, $field) {
                                return 5 - (value.match(/\r/g) || []).length;
                            }
                        }
                    }
                }
            }
        })
        .on('err.validator.fv', function(e, data) {
            // $(e.target)    --> The field element
            // data.fv        --> The FormValidation instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('fv.messages')
                // Hide all the messages
                .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-fv-validator="' + data.validator + '"]').show();
        })
        .on('success.form.fv', function(e) {});
}

/* =========================================================
 Login 7
 ============================================================ */

if (jQuery('.md-login-7').length) {
    $('#login-7-form').formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            fields: {
                password: {
                    validators: {
                        identical: {
                            field: 'confirmPassword',
                            message: 'Mot de passe incorrect'
                        },
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        },
                        stringLength: {
                            message: 'Le mot de passe doit contenir 5 caractères au minimum',
                            min: function(value, validator, $field) {
                                return 5 - (value.match(/\r/g) || []).length;
                            }
                        }
                    }
                }
            }
        })
        .on('err.validator.fv', function(e, data) {
            // $(e.target)    --> The field element
            // data.fv        --> The FormValidation instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('fv.messages')
                // Hide all the messages
                .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-fv-validator="' + data.validator + '"]').show();
        })
        .on('success.form.fv', function(e) {});
}

/* =========================================================
 md-stock-sim
 ============================================================ */
if (jQuery('.md-stock-sim').length) {
    $(".btn-transfert").click(function () {
        $(".stock-sim-1").fadeOut();
        $(".stock-sim-2").fadeIn();
    })
    $(".btn-transfert2").click(function () {
        $(".stock-sim-3-1").fadeOut();
        $(".stock-sim-3-2").fadeIn();
    })
    $(".btn-reset").click(function (e) {
        e.preventDefault();
        $(".stock-sim-1").fadeIn();
        $(".stock-sim-2").fadeOut();
    })
    $(".btn-reset2").click(function (e) {
        e.preventDefault();
        $(".stock-sim-3-1").fadeIn();
        $(".stock-sim-3-2").fadeOut();
    })
    var data = [{
        "name": "John Doe 1",
        "num": "0533554571"
    }, {
        "name": "John Doe 2",
        "num": "0533554572"
    }, {
        "name": "John Doe 3",
        "num": "0533554573"
    }, {
        "name": "John Doe 4",
        "num": "0533554574"
    }, {
        "name": "John Doe 5",
        "num": "0533554575"
    }, {
        "name": "John Doe 6",
        "num": "0533554576"
    }, {
        "name": "John Doe 7",
        "num": "0533554577"
    }, {
        "name": "John Doe 8",
        "num": "0533554578"
    }];

    var names = new Bloodhound({
        datumTokenizer: function(data) {
            return Bloodhound.tokenizers.whitespace(data.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: data
    });


    var nums = new Bloodhound({
        datumTokenizer: function(data) {
            return Bloodhound.tokenizers.whitespace(data.num);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: data
    });


    names.initialize();
    nums.initialize();


    /**
     *
     * @formIndex {number} : newly added form index
     * @transfertConstructor {object} : object that contains form addition methods
     */
    var formIndex = 1,
        validForms = 0,
        transfertConstructor = {
            wilayas: [
                'Adrar',
                'Chlef',
                'Laghouat',
                'Oum El Bouaghi',
                'Batna',
                'Béjaïa',
                'Biskra',
                'Béchar',
                'Blida',
                'Bouira',
                'Tamanrasset',
                'Tébessa',
                'Tlemcen',
                'Tiaret',
                'Tizi Ouzou',
                'Alger',
                'Djelfa',
                'Jijel',
                'Sétif',
                'Saïda',
                'Skikda',
                'Sidi Bel Abbès',
                'Annaba',
                'Guelma',
                'Constantine',
                'Médéa',
                'Mostaganem',
                'M\'Sila',
                'Mascara',
                'Ouargla',
                'Oran',
                'El Bayadh',
                'Illizi',
                'Bordj Bou Arreridj',
                'Boumerdès',
                'El Tarf',
                'Tindouf',
                'Tissemsilt',
                'El Oued',
                'Khenchela',
                'Souk Ahras',
                'Tipaza',
                'Mila',
                'Aïn Defla',
                'Naâma',
                'Aïn Témouchent',
                'Ghardaïa',
                'Relizane'
            ],
            numero: ['0533554578', '0533554577', '0533554576', '0533554574', '0533554572',
                '0333554578', '0333554577', '0333554576', '0333554575', '0333554574'
            ],
            spaceTheNumber: function(str, cond) {
                var r = '';
                if (cond) {
                    for (i = 0; i < 40; i++) {
                        r = "<span style='color:red'>" + str.substr(0, 2) + "</span> " + str.substr(2, 2) + " " + str.substr(4, 2) + " " + str.substr(6, 2) + " " + str.substr(8, 2);
                    }
                } else {
                    for (i = 0; i < 40; i++) {
                        r = str.substr(0, 2) + " " + str.substr(2, 2) + " " + str.substr(4, 2) + " " + str.substr(6, 2) + " " + str.substr(8, 2);
                    }
                }
                return r;
            },
            substringMatcher: function(strs) {
                return function findMatches(q, cb) {
                    var matches, substrRegex;
                    // an array that will be populated with substring matches /
                    matches = [];
                    // regex used to determine if a string contains the substring `q` /
                    substrRegex = new RegExp(q, 'i');
                    /**
                     * iterate through the pool of strings and for any string that
                     * contains the substring `q`, add it to the `matches` array
                     */
                    $.each(strs, function(i, str) {
                        var str1 = str,
                            r;

                        for (i = 0; i < 40; i++) {
                            r = "<span style='color:red'>" + str1.substr(0, 2) + "</span> " + str1.substr(2, 2) + " " + str1.substr(4, 2) + " " + str1.substr(6, 2) + " " + str1.substr(8, 2);
                        }
                        if (substrRegex.test(str)) {
                            /**
                             * the typeahead jQuery plugin expects suggestions to a
                             * JavaScript object, refer to typeahead docs for more info
                             */
                            matches.push({ value: r });
                        }
                    });
                    cb(matches);
                };
            },
            checkLength: function() {
                var numElem = $('.transfert-content').length;
                if (numElem <= 1) {
                    $('.remove').css("display", "none");
                } else {
                    $('.remove').css("display", "block");
                }
                $('.directiveId').each(function(index, el) {
                    var val = index + 1;
                    $(el).html(val);
                });
            },
            compile: function() {
                this.checkLength();
                this.addSpaces();
            },
            init: function(elem) {
                elem
                    .find('input[name="numero"]')
                    .typeahead({
                        hint: false,
                        highlight: true,
                        minLength: 1
                    }, {
                        name: 'names',
                        displayKey: 'name',
                        source: names.ttAdapter(),
                        templates: {
                            suggestion: function(data) {
                                console.log('data', data);
                                return $("<div />", {
                                    "html": "<div class='cleafix'>" +
                                    data.name +
                                    "<br />" + transfertConstructor.spaceTheNumber(data.num, true) +
                                    "</div>"
                                });
                            }
                        }
                    }, {
                        name: 'nums',
                        displayKey: 'num',
                        source: nums.ttAdapter(),
                        templates: {
                            suggestion: function(data) {
                                return $("<div />", {
                                    "html": "<div class='cleafix'>" +
                                    data.name +
                                    "<br />" + transfertConstructor.spaceTheNumber(data.num, true) +
                                    "</div>"
                                });
                            }
                        }
                    })
                    .on('typeahead:selected', function(e, suggestion, dataSetName) {
                        /* Revalidate the state field */
                        elem.formValidation('revalidateField', 'numero');
                        $(this).typeahead('val', transfertConstructor.spaceTheNumber(suggestion.num, false));
                    })
                    .on('typeahead:closed', function(e) {
                        /* Revalidate the numero field */
                        elem.formValidation('revalidateField', 'numero');
                    });


                elem
                    .formValidation({
                        framework: 'bootstrap',
                        icon: {
                            valid: 'fa fa-check',
                            invalid: 'fa fa-exclamation-triangle',
                            validating: 'fa fa-refresh'
                        },
                        err: {
                            container: 'tooltip'
                        },
                        fields: {
                            kitdebut: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    }
                                }
                            },
                            kitfin: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    }
                                }
                            },
                            nsim: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    }
                                }
                            },
                            numero: {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    },
                                    stringLength: {
                                        message: 'la valeur doit être compris entre 10 et 14 caractères',
                                        between: {
                                            min: 10,
                                            max: 14,
                                            message: 'la valeur doit être compris entre 10 et 14 caractères'
                                        }
                                    },
                                    callback: {
                                        message: 'Numéro invalide',
                                        callback: function(value, validator, $field) {
                                            if (value.match("^05") || value.match("^06")) {
                                                return {
                                                    valid: true,
                                                    message: 'Numéro invalide'
                                                };
                                            } else {
                                                return false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                    .on('success.form.fv', function(e) {
                        $(e.target).data('formValidation');
                    });
            },
            validNumber: function(str) {
                var valid = false;
                for (var i = 0, len = data.length; i < len; i++) {
                    if (data[i].num === str.replace(/ /g, '')) {
                        valid = true;
                        break;
                    }
                }
                return valid;
            },
            addSpaces: function() {
                var index = 0;
                $('.inputWithSpace').on('keyup', function(event) {
                    var key = event.which || event.keyCode || event.charCode;
                    if (key !== 8 && key !== 37 && key !== 38 && key !== 39 && key !== 40) {
                        index++;
                        if (index == 2) {
                            var reformat = this.value.replace(/(\d{2}\s*)/g, function(match) {
                                if (match.match(/\s/)) { return match; }
                                return match + " ";
                            });
                            this.value = reformat;
                            index = 0;
                        }
                    }
                });
            }
        };
    console.log('transfertConstructor', transfertConstructor);
    window.addSpaces = transfertConstructor.addSpaces;

    // Render first form

    $(document).ready(function() {
        transfertConstructor.init($('#transfert-form,#transfert-form2'));
        transfertConstructor.checkLength();
        transfertConstructor.addSpaces();
        $.map($('.transfert-content'), function(elem, i) {
            $(elem).find('form').data('formValidation').resetForm(true);
        });
    });

    /**
     * clientsToAdd
     */

    var clientsToAdd = [];
    $('.validateForms').on('click', function() {
        var number = '',
            count = 0;
        clientsToAdd = [];
        $.map($('.transfert-content'), function(elem, i) {
            number = $(elem).find("input[name='numero']").val().replace(/ /g, '');
            if (number !== '' && !transfertConstructor.validNumber(number) && number.length <= 10 && clientsToAdd.indexOf(number) == -1)
                clientsToAdd.push(number);
            console.log('clientsToAdd', clientsToAdd);
            $(elem).find('form').data('formValidation').validate();
            validForms = $(elem).find('form').data('formValidation').isValid();
            console.log('validForms', validForms, i);
            if (!validForms) {
                count++;
            }
            console.log('count', count);
        });

        if (count === 0 || clientsToAdd.length !== 0) {
            console.log(clientsToAdd.length);
            if (clientsToAdd.length === 0) {
                $('#msgModal').modal('show');
                // $('#msgModal').on('hide.bs.modal', function() {
                //     $.map($('.transfert-content'), function(elem, i) {
                //         $(elem).find('form').data('formValidation').resetForm();
                //     });
                // });
            } else {
                // userTemplate
                var userTemplate = $("#userTemplate").html();
                $(".wizard-target").html(_.template(userTemplate));
                // console.log(clientsToAdd[0]);
                $('#add-client-modal').modal('show');
                // clientsToAdd.shift();
                // $('#add-client-modal').on('hide.bs.modal', function() {
                //     $.map($('.transfert-content'), function(elem, i) {
                //         $(elem).find('form').data('formValidation').resetForm();
                //     });
                // });
                $('#rootwizard').bootstrapWizard({
                    onTabChange: function() {
                        console.log('onTabChange');
                    },
                    onNext: function(tab, navigation, index) {
                        var numTabs = $('#rootwizard').find('.tab-pane').length;
                        if (index === numTabs) {
                            console.log('last tab');
                            $('#add-client-modal').modal('hide');
                        }
                    }
                });
                $.map($('.tab-pane'), function(elem) {
                    var number = $(elem).find('.pdv-number').val();
                    $(elem).find('form').formValidation({
                        framework: 'bootstrap',
                        icon: {
                            valid: 'fa fa-check',
                            invalid: 'fa fa-exclamation-triangle',
                            validating: 'fa fa-refresh'
                        },
                        err: {
                            container: 'tooltip'
                        },
                        fields: {
                            'number-pdv': {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    }
                                }
                            },
                            'name-pdv': {
                                validators: {
                                    notEmpty: {
                                        message: 'Ce champ est obligatoire'
                                    }
                                }
                            }
                        }
                    })
                        .on('success.form.fv', function(e) {
                            e.preventDefault();
                            var name = $(e.target).find('.name-pdv').val(),
                                number = $(e.target).find('.pdv-number').val().replace(/ /g, ''),
                                client = {
                                    "name": name,
                                    "num": number
                                };
                            // Add new client to typeahead search engine
                            data.push(client);
                            names.add([client]);
                            nums.add([client]);
                            // Go to next step
                            $('#rootwizard').bootstrapWizard('next');
                        });

                    $(elem).find('.pdv-number').attr('value', transfertConstructor.spaceTheNumber(number));
                    $(elem).find('.next').on('click', function(e) {
                        e.preventDefault();
                        $('#rootwizard').bootstrapWizard('next');
                    });
                    // init selectpickers
                    $(elem).find('.selectpicker-wilaya').selectpicker();
                    $(elem).find('.selectpicker-commune').selectpicker();

                });
            }
        }

    });

    /**-------------**/
      



    /*--------------------------------tablesorter----------------*/

    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: true }
        },
        widgets: ['zebra', 'filter']
    });
    $("#myTable1").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: true },
            5: { sorter: true }
        },
        widgets: ['zebra', 'filter']
    });
    $("#myTable2").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: true },
            5: { sorter: true }
        },
        widgets: ['zebra', 'filter']
    });
    $("#myTable3").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true }
        },
        widgets: ['zebra', 'filter']
    });
    /*------------sort------------*/
    $("#myTable,#myTable1,#myTable2,#myTable3").bind("sortEnd", function() {
        console.log('sortEnd');
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
        $("#myTable,#myTable1,#myTable2,#myTable3").trigger("applyWidgets");
    });
    /*------------filter------------*/
    $("#myTable,#myTable1,#myTable2,#myTable3").bind("filterEnd", function() {
        var sortable = $(this).find('.first').parent(),
            elems = [];
        sortableElems = $.map(sortable, function(elem, i) {
            if (!$(elem).hasClass('filtered')) {
                elems.push(elem);
            }
        });
        $.map(elems, function(elem, i) {
            $(elem).find('.first').text(i + 1);
        });
        $("#myTable,#myTable1,#myTable2,#myTable3").trigger("applyWidgets");
    });
    /*--------------------------------selectpicker----------------*/
    var inputs = $('.selectpicker');
    var query = {};

    $('.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable,#myTable1,#myTable2,#myTable3').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });


    /*-----------------datetimepicker Vendu----------------*/
    $('#datetimepicker1').datetimepicker({
        format: 'MMM DD, YYYY',
        ignoreReadonly: true
        // locale: 'fr'
    });

    $('#datetimepicker2').datetimepicker({
        format: 'MMM DD, YYYY',
        ignoreReadonly: true,
        useCurrent: false
    });
    $("#datetimepicker1").on("dp.change", function(e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function(e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });

    /*-----------------searchSim vendu----------------*/
    function searchSim() {
        var input;
        input = document.getElementById("numero").value;
        date1 = document.getElementById("dateDebut").value;
        date2 = document.getElementById("dateFin").value;

        console.log('date1', date1);
        console.log('date2', date2);
        if (date1 === "" && date2 !== "") {
            filtersDate = "<=" + date2;
        } else
        if (date1 !== "" && date2 === "") {
            filtersDate = ">=" + date1;
        } else if (date1 === "" && date2 === "") {
            filtersDate = "";
        } else if (date1 === date2) {
            filtersDate = date1;
        } else {
            filtersDate = date1 + " - " + date2;
        }

        var $table = $("#myTable"),
            columns = ['','', input, filtersDate];

        console.log('test', columns);
        $table.trigger('search', [columns]);

    }
}
/* =========================================================
 md-stock-propre
 ============================================================ */

if (jQuery('.md-stock-propre').length) {

    /*--------------------------------Search form----------------*/
    function searchStock() {
        var input, input2;
        input = document.getElementById("nomClient").value;
        input2 = document.getElementById("numero").value;
        var $table = $("#myTable"),
            columns = ['', input2, input];
        $table.trigger('search', [columns]);
    }


    $('.adv-search').click(function() {
        $('.adv-search-text').toggleClass("showSearch");
    });
    /*--------------------------------tablesorter----------------*/

    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: false },
            3: { sorter: true },
            4: { sorter: false }
        },
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset'
        }
    });

    $("#myTable").bind("sortEnd", function() {
        console.log('sortEnd');
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    $("#myTable").bind("filterEnd", function() {
        var sortable = $(this).find('.first').parent(),
            elems = [];
        sortableElems = $.map(sortable, function(elem, i) {
            if (!$(elem).hasClass('filtered')) {
                elems.push(elem);
            }
        });
        $.map(elems, function(elem, i) {
            $(elem).find('.first').text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });
    /*--------------------------------selectpicker----------------*/
    var inputs = $('.selectpicker');
    var query = {};

    $('.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });

}
/* =========================================================
 md-stock-propre and md-stock-sim
 ============================================================ */

if ((jQuery('.md-stock-propre').length) || (jQuery('.md-stock-sim').length)) {
    /*-----------------Tabs----------------*/
    var onSelect = function(event, item) {
        heightAuto();

        function heightAuto() {
            height = $(window).height() - $("header").height() - 50;
        }

        $('#main-content').css('min-height', height).css({
            'min-height': height
        });

        $(window).resize(function() {
            heightAuto();
        });
    };
    $("#tabbed-nav").zozoTabs({
        theme: "blue",
        maxRows: 1,
        mobileNav: true,
        minWindowWidth: 300,
        responsive: true,
        select: onSelect,
        animation: {
            duration: 800,
            defaultTab: "tab1",
            effects: "fadeIn"
        }
    });

    /*-----------------mobile tabs----------------*/
    $('.z-tabs-mobile .z-arrow').click(function() {
        $('#tabbed-nav ul').toggleClass("showMenu");
    });
    $('#tabbed-nav ul li a').click(function() {
        $('#tabbed-nav ul').toggleClass("showMenu");
        $(".z-tabs-mobile .z-title").html($(this).html());

    });
}

/*--------------------------------adminPanel toggle and Affich Menu----------------*/
$('.header-user-info').click(function() {
    $('.navLog').slideToggle();
    $('#adzmegamenu-accordion').removeClass('o-spmenu-open');
     $('#o-spmenu-overlay').removeClass('o-spmenu-overlay-show');
     $('body').removeClass("o-spmenu-push-toright");
});

$(".adzmegamenu-icon").click(function() {
    $('.navLog').slideUp();
});

/* =========================================================
 md-admin-panel
 ============================================================ */
if (jQuery('.md-admin-panel').length) {
    /*--------------------------------tooltip----------------*/
    $('[data-toggle="tooltip"]').tooltip();
    $(".btn-1").click(function() {
        $('#modif-client-modal').modal('show')
    });
    $(".btn-2").click(function() {
        $('#delete-modal').modal('show')
    });

    /*--------------------------------selectpicker----------------*/


    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: true },
            5: { sorter: true },
            6: { sorter: false }
        },
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset',
            filter_functions: {
                3: {
                    "Newest": function(e, n, f, i) {
                        return n >= today;
                    },
                    "Older": function(e, n, f, i) {
                        return n < today;
                    }
                }
            }
        }
    });
    $("#myTable").bind("sortEnd", function() {
        console.log('sortEnd');
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    $("#myTable").bind("filterEnd", function() {
        var sortable = $(this).find('.first').parent(),
            elems = [];
        sortableElems = $.map(sortable, function(elem, i) {
            if (!$(elem).hasClass('filtered')) {
                elems.push(elem);
            }
        });
        $.map(elems, function(elem, i) {
            $(elem).find('.first').text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    var inputs = $('.selectpicker');
    var query = {};

    $('.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });
    /*--------------------------------uniform----------------*/
    $(function() { $("input:checkbox").uniform(); });
    /*--------------------------------Search form----------------*/
    // $('.filtre-group input[type="checkbox"]').on("change search", function() {

    var links = [];
    $("#myTable td").each(function(index, element) {
        links.push({
            text: $(this).text(),
            element: element
        });
    });

    $('.filtre-group input[type="checkbox"]').on("change search", function() {
        var str = '';
        var res = $.map($('.inputSearch'), function(elem, index) {
            var filterTable = [],
                value = $(elem).val();
            if ($(elem).is(':checked')) {
                str += '(?=.*' + value + ')';
                return '(?=.*' + value + ')';
            }
        });


        filtersStr = res.join('');

        var columns = [];
        if (filtersStr.length)
            columns[5] = '/' + filtersStr + '/';
        else
            columns[5] = '';

        $("#myTable").trigger('search', [columns]);


    });



    /*--------------------------------formValidation add user----------------*/

    $('#addUser').formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            fields: {
                nameUser: {
                    validators: {
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        }
                    }
                },
                numTel: {
                    validators: {
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        },
                        regexp: {
                            regexp: '^0(5)[0-9]{8}$',
                            message: "Numéro invalide"
                        }
                    }
                },
                fonctionnalites: {
                    validators: {
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        }
                    }
                },
                password: {
                    validators: {
                        stringLength: {
                            message: 'Le mot de passe doit contenir 5 caractères au minimum',
                            min: function(value, validator, $field) {
                                return 5 - (value.match(/\r/g) || []).length;
                            }
                        },
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        identical: {
                            field: 'password',
                            message: 'Les deux mots de passe ne sont pas identiques '
                        },
                        notEmpty: {
                            message: 'Ce champ est obligatoire'
                        },
                        stringLength: {
                            message: 'Le mot de passe doit contenir 5 caractères au minimum',
                            min: function(value, validator, $field) {
                                return 5 - (value.match(/\r/g) || []).length;
                            }
                        }
                    }
                }
            }
        })
        .on('err.validator.fv', function(e, data) {
            // $(e.target)    --> The field element
            // data.fv        --> The FormValidation instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('fv.messages')
                // Hide all the messages
                .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-fv-validator="' + data.validator + '"]').show();
        })
        .on('success.form.fv', function(e) {});
    /*--------------------------------formValidation modify user----------------*/

    $('#modifyUser').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {
            nameUser: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    }
                }
            },
            numTel: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    },
                    regexp: {
                        regexp: '^0(5)[0-9]{8}$',
                        message: "Numéro invalide"
                    }
                }
            },
            fonctionnalites: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    },
                    identical: {
                        field: 'password',
                        message: 'Les deux mots de passe ne sont pas identiques '
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {});

    $('.btn-3').on('click', function() {
        $(this).toggleClass('alert');
    });

}
/* =========================================================
 md-liste-clients
 ============================================================ */
if (jQuery('.md-liste-clients').length) {
    /*--------------------------------tooltip----------------*/
    $('[data-toggle="tooltip"]').tooltip();
    $(".btn-1").click(function() {
        $('#modify-client-modal').modal('show')
    });
    $(".btn-2").click(function() {
        $('#delete-modal').modal('show')
    });
    /*--------------------------------selectpicker----------------*/

    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: false },
            4: { sorter: true },
            5: { sorter: true },
            6: { sorter: true },
            7: { sorter: false }
        },
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset'
        }
    });
    $("#myTable").bind("sortEnd", function() {
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
    });
    var inputs = $('.filterT.selectpicker');
    var query = {};

    $('.filterT.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });

    /*--------------------------------formValidation add user----------------*/

    $('#addUser').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {
            namePDV: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    }
                }
            },
            numSim: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    },
                    regexp: {
                        regexp: '^0(5)[0-9]{8}$',
                        message: "Numéro invalide"
                    }
                }
            },
            numTele: {
                excluded: true
            }
        }
    }).on('success.form.fv', function(e) {});

    /*--------------------------------formValidation modify user----------------*/

    $('#modifyUser').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {

            numSim: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    },
                    regexp: {
                        regexp: '^0(5)[0-9]{8}$',
                        message: "Numéro invalide"
                    }
                }
            },
            namePDV: {
                validators: {
                    notEmpty: {
                        message: 'Ce champ est obligatoire'
                    }
                }
            }
        }
    }).on('success.form.fv', function(e) {});

}
/* =========================================================
 md-recherche
 ============================================================ */
if (jQuery('.md-recherche').length) {
    /*--------------------------------tablesorter----------------*/

    $("#myTable").tablesorter({
        headers: {
            0: { sorter: false },
            1: { sorter: true },
            2: { sorter: true },
            3: { sorter: true },
            4: { sorter: false }
        },
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset'
        }
    });

    // Target the $('.search') input using built in functioning
    // this binds to the search using "search" and "keyup"
    // Allows using filter_liveSearch or delayed search &
    // pressing escape to cancel the search

    // Basic search binding, alternate to the above
    // bind to search - pressing enter and clicking on "x" to clear (Webkit)
    // keyup allows dynamic searching
    /*
    $(".search").bind('search keyup', function (e) {
      $('table').trigger('search', [ [this.value] ]);
    });
    */
    /*--------------------------------tablesorter filter all columns----------------*/
    $('.btn-search').on('click', function() {
        /*--------------------------------filter all columns----------------*/
        var $table = $("#myTable"),
            filter = [];
        if ($('select.searchTable').val() == "all") {
            var totalColumns = $table[0].config.columns,
                $t = $('.search0'),
                col = $t.data('column'), // zero-based index
                txt = $t.val(), // text to add to filter
                filtersStr = '';

            filtersStr = $('.search0').val();
            filter[col === 'all' ? totalColumns : col] = txt;
            $table.trigger('search', [filter]);
        } else
        /*--------------------------------filter columns 1----------------*/
        if ($('select.searchTable').val() == "1") {
            var $t = $('.search1'),
                txt = $t.val(), // text to add to filter
                filtersStr = '';
            filtersStr = $('.search1').val();
            filter[1] = txt;
            $table.trigger('search', [filter]);

        } else
        /*--------------------------------filter columns 2----------------*/
        if ($('select.searchTable').val() == "2") {
            var $t = $('.search2'),
                txt = $t.val(), // text to add to filter
                filtersStr = '';

            var res = $.map($('.searchTime'), function(elem, index) {
                var filterTable = [];
                if ($(elem).val()) {
                    filterTable.push($(elem).val());
                }
                return filterTable;
            });
            filtersStr = res.join(':');

            filtersStr = $('.search2').val() + " " + filtersStr;
            filter[2] = filtersStr;
            $table.trigger('search', [filter]);
        } else
        /*--------------------------------filter columns 3----------------*/
        if ($('select.searchTable').val() == "3") {
            var $table = $("#myTable"),
                filter = [],
                $t = $('.searchDebut'),
                $t2 = $('.searchFin'),
                txt = $t.val(), // text to add to filter
                txt2 = $t2.val(), // text to add to filter
                filtersStr = '';

            filtersStr = ">" + txt + " && <" + txt2;
            filter[3] = filtersStr;

            if (txt === "" && txt2 === "") {
                filter[3] = "";
                $table.trigger('search', [filter]);
            }
            if (txt < txt2) {
                $table.trigger('search', [filter]);
            }
        }

    });
    // Allow changing an input from one column (any column) to another
    $('select.searchTable').change(function() {
        if ($(this).val() == "1") {
            $('.inputSearch').css("display", "none");
            $('.inputSearch1').css("display", "block");
        } else
        if ($(this).val() == "2") {
            $('.inputSearch').css("display", "none");
            $('.inputSearch2').css("display", "block");
            $('#datetimepicker1').datetimepicker({
                format: 'DD-MM-YYYY',
                useCurrent: false //Important! See issue #1075
            });
        } else
        if ($(this).val() == "3") {
            $('.inputSearch').css("display", "none");
            $('.inputSearch3').css("display", "block");
        } else {
            $('.inputSearch').css("display", "none");
            $('.inputSearchAll').css("display", "block");
        }
        //reset filters on change select
        $("#myTable").trigger('sortRestart').trigger('filterReset');
    });



    /*--------------------------------tablesorter----------------*/

    $("#myTable").bind("sortEnd", function() {
        console.log('sortEnd');
        $.map($(this).find('.first'), function(elem, i) {
            $(elem).text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    $("#myTable").bind("filterEnd", function() {
        var sortable = $(this).find('.first').parent(),
            elems = [];
        sortableElems = $.map(sortable, function(elem, i) {
            if (!$(elem).hasClass('filtered')) {
                elems.push(elem);
            }
        });
        $.map(elems, function(elem, i) {
            $(elem).find('.first').text(i + 1);
        });
        $("#myTable").trigger("applyWidgets");
    });

    var inputs = $('.filterT.selectpicker');
    var query = {};

    $('.filterT.selectpicker').on('change', function() {
        inputs.each(function() {
            var id = $(this).find("option:selected").text();
            var value = $(this).val();
            query.id = value;
            $('#myTable').find('th[data-column="' + value + '"]').trigger('sort');
        });
    });

}

/** bootpag */

if ((jQuery('.md-historique').length) || (jQuery('.md-recherche').length)|| (jQuery('.md-stock-sim').length) || (jQuery('.md-stock-propre').length) || (jQuery('.md-liste-clients').length) || (jQuery('.md-admin-panel').length)) {
    /*--------------------------------paginator----------------*/
    $('.paginator').bootpag({
        total: 10,
        page: 1,
        maxVisible: 5,
        leaps: true,
        first: '←',
        last: '→',
        wrapClass: 'pagination',
        activeClass: 'active',
        disabledClass: 'disabled',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first'
    });
}