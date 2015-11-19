
// var int=setInterval("clock()",50)
// 
// Firefox和Chrome早期版本中带有前缀
// var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

// 选择目标节点
var target = document.querySelector('.navigator-issue-only');
 
// 创建观察者对象
var observerFixed = new MutationObserver(function(mutations) {
  // mutations.forEach(function(mutation) {
    console.log("observed");

 //    $('select').change(function() {
	//     var a=$(':selected').text(); // "city1city2choose iofoo"
	//     var b=$(':selected').val();  // "city1" - selects just first query !
	//     //but..
	//     var c=$(':selected').map(function(){ // ["city1","city2","choose io","foo"]
	//         return $(this).text();
	//     }); 
	//     var d=$(':selected').map(function(){ // ["city1","c2","s1","s5"]
	//         return $(this).val();
	//     });
	//     console.log(a,b,c,d);
	// });
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr("selected", true);
	webChange();
    // selectFixed();

    // $('#resolution').onChange=webChange;
    $('#resolution').change(webChange);
  // });
});


// 配置观察选项:
var config = { childList: true, subtree: true }
 
// 传入目标节点和观察选项
observerFixed.observe(target, config);


// $('#resolution').addEventListener("change",webChange,false); 
function webChange() {
	var val=$('#resolution').val();
	// console.log(val);
	switch (val)
	{
		case "1":
		console.log(val);
			selectFixed();
			break;
		case "2":
		console.log(val);
			selectWontFix();
			break;
		case "3":
		console.log(val);
			selectDuplicate();
			break;
		case "5":
		console.log(val);
			selectCannotReproduce();
			break;
		case "10001":
		console.log(val);
			selectNotBug();
			break;
		case "10100":
		console.log(val);
			selectPending();
			break;
		case "10101":
		console.log(val);
			selectDefer();
			break;
	}
}

function setDropdownValue( ddownId, val ) { // not used
    // $("#choice1 option[value='10']").attr("selected", true);

    $("#" + ddownId + " option[value='" + val + "']")
        .attr("selected", true);
}

function selectFixed() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10052").change();
	$('#customfield_10018').val("10045").change();
	$('#customfield_10201').val("11602").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(2)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(4)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectWontFix() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10052").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11601").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectDuplicate() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10057").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11601").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectCannotReproduce() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10052").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11600").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(2)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectNotBug() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10057").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11601").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14521").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(8)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectPending() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10052").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11600").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(2)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}

function selectDefer() {
	// $('#fixVersions > optgroup:nth-child(1) > option:nth-child(1)').attr('selected',true);
	$('#customfield_10019').val("10052").change();
	$('#customfield_10018').val("10050").change();
	$('#customfield_10201').val("11600").change();
	$('#customfield_12300').val("14801").change();
	$('#customfield_12200').val("14520").change();
	// $('#customfield_10017').text("No Solution");
    // $('#customfield_10019 > option:nth-child(3)').attr('selected',true);
    // $('#customfield_10018 > option:nth-child(7)').attr('selected',true);
    // $('#customfield_10201 > option:nth-child(2)').attr('selected',true);
    // $('#customfield_12300 > option:nth-child(3)').attr('selected',true);
}