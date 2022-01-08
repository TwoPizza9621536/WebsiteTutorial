/* Start SDPX identifier expressions
 * SPDX-FileCopyrightText: 2020 Samuel Wu
 * SPDX-License-Identifier: CC0-1.0
 * End SDPX identifier expressions
 */
"use strict";

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = formatDate;

console.log("Here's a hidden message");
