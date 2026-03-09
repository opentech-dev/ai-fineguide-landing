document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("ticketChart").getContext("2d");

    const img = document.createElement("img"); // Create an <img> element
    img.src = "http://localhost:3000/assets/images/_logo-icon-64.png"; // Set image source

    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Low", "Medium", "High", "Complex"],
            datasets: [
                {
                    label: "Inquiries (%)",
                    data: [60, 23, 12, 5],  
                    backgroundColor: ["#4CAF50", "#FFC107", "#FF5722", "#9F0812"],
                    borderRadius: 8
                },
                {
                    label: "Trend Line",
                    data: [60, 23, 12, 5], 
                    type: "line",
                    borderColor: "#007BFF",
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: "#007BFF",
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            layout: {
                padding: 20
            },
            scales: {
                y: {
                    title: { display: true, text: "Inquiries (%)", color: "white" },
                    ticks: { color: "white", display: false }
                },
                x: {
                    title: { display: true, text: "Complexity", color: "white" },
                    ticks: { color: "white" }
                }
            },
            plugins: {
                legend: { 
                    display: false,
                },
                annotation: {
                    annotations: {
                        label1: {
                            type: 'label',
                            xValue: 2,
                            yValue: 43,
                            backgroundColor: 'rgba(245,245,245)',
                            content: [
                                "Split your inquiries into 4 categories:",
                                "from easy to complex",
                            ],
                            font: {
                                size: 16,
                                align: 'left'
                            }
                        },
                        label2: {
                            type: 'label',
                            xValue: 2,
                            yValue: 50,
                            width: 20,
                            height: 20,
                            content: img,
                        },
                    },

                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ' - ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '%';
                            }
                            return label;
                        }
                    }
                },
                plugins: {

                }
            }
        }
    });

    let arr = [() => {
        myChart.options.plugins.annotation.annotations = {
            aiArea: {
                type: "box",
                xMin: -0.5,
                xMax: 1.5,
                yMin: 0,
                yMax: 60,
                backgroundColor: "rgba(00, 99,66, 0.2)", // Light green for AI
                borderWidth: 2,
                borderColor: "#4CAF50",
            },
            label1: {
                type: 'label',
                xValue: 2,
                yValue: 50,
                backgroundColor: 'rgba(245,245,245)',
                content: ['Our Agents easily handles','most of the inquiries'],
                font: {
                    size: 16
                }
            },
            label2: {
                type: 'label',
                xValue: 0.8,
                yValue: 30,
                // backgroundColor: 'rgba(245,245,245)',
                content: ['80%'],
                color: '#efefef',
                font: {
                    size: 34,
                    weight: 'bold'
                }
            }
        };
        myChart.data.datasets[0].backgroundColor = ["#4CAF50", "#FFC107", "#6E11B0", "#3C0366"];
        myChart.update();
        },
        () => {
            myChart.options.plugins.annotation.annotations = {
                humanArea: {
                    type: "box",
                    xMin: 1.5,
                    xMax: 3.5,
                    yMin: 0,
                    yMax: 13,
                    backgroundColor: "rgba(00, 99,66, 0.2)", // Light purple for humans
                    borderWidth: 2,
                    borderColor: "#4CAF50",
                    label: {
                        content: "Human Zone",
                        enabled: true,
                        position: "center",
                        color: "#9C27B0",
                        font: { size: 16 }
                    }
                },
                label1: {
                    type: 'label',
                    xValue: 2.5,
                    yValue: 20,
                    backgroundColor: 'rgba(245,245,245)',
                    content: ['Leaving humans','only when they are needed'],
                    font: {
                      size: 16
                    }
                  },
                label2: {
                    type: 'label',
                    xValue: 2.5,
                    yValue: 6,
                    // backgroundColor: 'rgba(245,245,245)',
                    content: ['20%'],
                    color: '#efefef',
                    font: {
                        size: 34,
                        weight: 'bold'
                    }
                }
                }
                myChart.data.datasets[0].backgroundColor = ["#C27BFF", "#9810FA", "#FF5722", "#9F0812"];
                myChart.update();
            },
    ]

    // const addAnnotation = () => {
    //     myChart.options.plugins.annotation.annotations = {
    //         label1: {
    //             type: 'label',
    //             xValue: 2.5,
    //             yValue: 60,
    //             backgroundColor: 'rgba(245,245,245)',
    //             content: ['Handled By', 'Fineguide'],
    //             font: {
    //               size: 18
    //             }
    //           },
    //         aiArea: {
    //             type: "box",
    //             xMin: -0.5,
    //             xMax: 1.5,
    //             yMin: 0,
    //             yMax: 65,
    //             backgroundColor: "rgba(00, 99,66, 0.2)", // Light green for AI
    //             borderWidth: 2,
    //             borderColor: "#4CAF50",

    //         },
    //         humanArea: {
    //             type: "box",
    //             xMin: 1.5,
    //             xMax: 3.5,
    //             yMin: 0,
    //             yMax: 10,
    //             backgroundColor: "rgba(156, 39, 176, 0.2)", // Light purple for humans
    //             borderWidth: 2,
    //             borderColor: "#9C27B0",
    //             label: {
    //                 content: "Human Zone",
    //                 enabled: true,
    //                 position: "center",
    //                 color: "#9C27B0",
    //                 font: { size: 16 }
    //             }
    //         }
    //     };

    //     myChart.update();  // Apply the changes
    // }

    // addAnnotation();

    // Add the highlight areas after 5 seconds
    // setTimeout(, 1000); // 5-second delay

    let out = [];
    setInterval(() => {

        if (!arr.length) { 
            arr = out;
            out = [];
        }
        
        const fn = arr.shift();
        fn();
        out.push(fn);
    }, 5000);
});


