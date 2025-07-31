ej.treegrid.TreeGrid.Inject(ej.treegrid.ColumnChooser,ej.treegrid.Toolbar,ej.treegrid.Page);

var sampleData =  [
    {
        taskID: 1,
        taskName: 'Planning',
        tàskNamee: 'Planningss',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        designation: 'Vice President',
        employeeID: 1,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false, designation: 'Chief Executive Officer',
                employeeID: 2 },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true,designation: 'Chief Executive Officer',
                employeeID: 3  },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false ,designation: 'Chief Executive Officer',
                employeeID: 4 },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true ,designation: 'Chief Executive Officer',
                employeeID: 5 }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
		designation: 'Vice President',
        employeeID: 6, 
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false, designation: 'Sales Representative',
                employeeID: 7 },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false,designation: 'Sales Representative',
                employeeID: 8  },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true ,designation: 'Sales Representative',
                employeeID: 9 },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true,designation: 'Sales Representative',
                employeeID: 10  },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true ,designation: 'Sales Representative',
                employeeID: 11 }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
		designation: 'Vice President',
        employeeID: 12 ,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
				designation: 'Sales Representative',
                employeeID: 13,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
					designation: 'Sales Representative',
					employeeID: 14 ,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false, designation: 'Sales Representative',
                employeeID: 15  },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true, designation: 'Sales Representative',
                employeeID: 16  },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true, designation: 'Sales Representative',
                employeeID: 17  },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false, designation: 'Sales Representative',
                employeeID: 18  },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false, designation: 'Sales Representative',
                employeeID: 19  },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Low', approved: true, designation: 'Sales Representative',
                employeeID: 20  }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
				designation: 'Sales Representative',
                employeeID: 21 ,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
					designation: 'Sales Representative',
					employeeID: 22 ,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true, designation: 'Sales Representative',
                employeeID: 23  },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true, designation: 'Sales Representative',
                employeeID: 24  },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false, designation: 'Sales Representative',
                employeeID: 25  },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false, designation: 'Sales Representative',
                employeeID: 26  },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true, designation: 'Sales Representative',
                employeeID: 27  },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false, designation: 'Sales Representative',
                employeeID: 28  }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
				designation: 'Sales Representative',
                employeeID: 29 ,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
					designation: 'Sales Representative',
					employeeID: 30, 
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true, designation: 'Sales Representative',
                employeeID: 31  },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false, designation: 'Sales Representative',
                employeeID: 32  },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true, designation: 'Sales Representative',
                employeeID: 33  },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false, designation: 'Sales Representative',
                employeeID: 34  },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true, designation: 'Sales Representative',
                employeeID: 35  },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Critical', approved: false, designation: 'Sales Representative',
                employeeID: 36  },
                    ]
                }]
            }
        ]
    }
];
function renderCustomColumnChooser (targetLHTMLElement, columns)  {
    var parentNodes = [
        { id: 1, name: 'Task DetailsÙ', hasChild: true, expanded: true },
        { id: 2, name: 'Period', hasChild: true, expanded: true },
        
    ];
    if (columns && columns.length) {
        treeData = columns.map(function(column) {
            var parentId;
            switch (column.field) {
                
                case 'taskName':
                    parentId = 1;
                    break;
                case 'startDate':
                case 'endDate':
                case 'duration':
                    parentId = 2;
                    break;
               
                default:
                    break;
            }
            return {
                id: column.uid,
                name: column.headerText,
                pid: parentId,
                isChecked: column.visible
            };
        });
        var uniquePids = [];
        treeData.forEach(function(item)  {
            if (uniquePids.indexOf(item.pid) === -1) {
                uniquePids.push(item.pid);
            }
        });
        const filteredParents = parentNodes.filter(function (parent) {return uniquePids.indexOf(parent.id) !== -1});
        treeData = treeData.concat(filteredParents);
    } else {
        treeData = [];
    }
    treeObj = new ej.navigations.TreeView({
        fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        showCheckBox: true,
        nodeClicked: nodeCheck,
        keyPress: nodeCheck,
        enableRtl: treegrid.enableRtl ? true : false,
        cssClass: "no-border",
    });
    if (columns && columns.length) {
        treeObj.appendTo(targetLHTMLElement);
    } else {
        var noRecordDiv = document.createElement('div');
        noRecordDiv.innerHTML = 'No Matches Found';
        noRecordDiv.className = 'no-record-text';
        targetLHTMLElement.appendChild(noRecordDiv);
    }
};
var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
            childMapping: 'subtasks',
            height: 350,
            treeColumnIndex: 1,
            showColumnChooser: true,
            allowPaging: true,
            pageSettings: {pageSize: 10},
            toolbar: ['ColumnChooser'],
            columnChooserSettings : {headerTemplate: '#columnchooser-headertemplate',footerTemplate: '#columnchooser-footertemplate',enableSearching: true,
                template: '#column-chooser-template',
                renderCustomColumnChooser: renderCustomColumnChooser,ignoreAccent:true,operator:'startsWith'
            },
           
            columns: [
                {
                    headerText: 'Task Details',
                    textAlign: 'Center',
                    columns: [
                        {
                            field: 'taskID',
                            headerText: 'taskID',
                            textAlign: 'Right',
                            width: 90,
                            showInColumnChooser:false
                        },
                        {
                            field: 'taskName',
                            headerText: 'taskName',
                            width: 110,
                            textAlign: 'Right',
                        },
                    ],
                },
                {
                    headerText: 'Period',
                    textAlign: 'Center',
                    columns: [
                        {
                            field: 'startDate',
                            headerText: 'startDate',
                            textAlign: 'Right',
                            width: 90,
                            type: 'date', format: 'yMd'
                        },
                        {
                            field: 'endDate',
                            headerText: 'endDate',
                            width: 110,
                            textAlign: 'Right',
                            type: 'date', format: 'yMd'
                        },
                        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
                    ],
                },
                
                { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' },
                { field: 'priority', headerText: 'Priority', width: 90 },
            ],
            created: onCreated
    });
    treegrid.appendTo('#TreeGrid');
    
    function nodeCheck(args) {
        let checkedNode = [args.node];
        if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
            let getNodeDetails = treeObj.getNode(args.node);
            if (getNodeDetails.isChecked == 'true') {
                treeObj.uncheckAll(checkedNode);
            } else {
                treeObj.checkAll(checkedNode);
            }
        }
    }
    function onCreated() {
        
        let submitButton = new ej.buttons.Button();
        submitButton.appendTo('#submitButton');
        if (document.getElementById('submitButton')) {
            (document.getElementById('submitButton')).onclick = () => {
                columnChooserSubmit();
            };
        }
        let abortButton = new ej.buttons.Button();
        abortButton.appendTo('#abortButton');
        if (document.getElementById('abortButton')) {
            (document.getElementById('abortButton')).onclick = function() {
                (treegrid.grid.columnChooserModule).hideDialog();
            };
        }
    }
    
    function columnChooserSubmit() {
        const checkedElements= [];
        const uncheckedElements = [];
        let showColumns = treegrid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
        showColumns = showColumns.map(function (col) { return col.headerText; });
        const treeItems = document.querySelectorAll('.e-list-item');
    
        treeItems.forEach(function(item) {
            const itemDetails = treeObj.getNode(item);
            if (!itemDetails.hasChildren) {
                if (item.getAttribute('aria-checked') === 'true') {
                    checkedElements.push(itemDetails.text);
                } else {
                    uncheckedElements.push(itemDetails.text);
                }
            }
        });
        showColumns = showColumns.filter(function(col){ uncheckedElements.indexOf(col) === -1});
        checkedElements.forEach(item => {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        treegrid.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    }