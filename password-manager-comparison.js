// Copyright from the original work from which this is derived:
//
// Copyright (c) 2018-2019 Quantopian Inc.
//
// Quantopian grants you the right to reuse this code in any private or public
// context, in modified or unmodified form, as long as this copyright notice is
// left intact and the table generated by this code (or your modified version
// of it) is preceded or followed by a visible credit to "Jonathan Kamens of
// Quantopian Inc." which links to
// https://medium.com/@QuantopianCyber/head-to-head-evaluation-of-five-password-managers-8faa4851c767 .
//
// If you add any additional features and/or products to the comparison grid or
// correct any errors or omissions, you are encouraged to submit your
// improvements back to security@quantopian.com so we can incorporate them into
// the original, published version of the grid for the benefit of other readers.
//
// Copyright for this derivative work:
//
// Copyright (c) 2019 Jonathan Kamens
//
// You can do whatever you want with this code provided that you leave this
// entire copyright block intact, credit me, and link back to
// https://blog.kamens.us/?p=5729.

var passwordManagerTable = function() {
  var rawData = [
    ["Feature",                                                          "Tags",                              ["1Password", "Dashlane", "Bitwarden", "LastPass", "Keeper",  "Zoho Vault", "RoboForm"], "CompareFunction"],
    ["Chrome support",                                                   ["Chrome"],                          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Firefox support",                                                  ["Firefox"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Edge support",                                                     ["Edge", "Windows"],                 ["yes",       "yes",      "yes",       "yes",      "yes",     "no",         "yes"],      null],
    ["Safari support",                                                   ["Safari", "macOS"],                 ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["macOS, Windows support",                                           ["OR", "macOS", "Windows"],          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Linux support",                                                    ["Linux"],                           ["poor",      "poor",     "yes",       "yes",      "yes",     "yes",        "poor"],     null],
    ["macOS command-line client",                                        ["macOS", "CLI"],                    ["yes",       "no",       "yes",       "poor",     "yes",     "no",         "no"],       null],
    ["Windows command-line client",                                      ["Windows", "CLI"],                  ["yes",       "no",       "yes",       "poor",     "yes",     "no",         "no"],       null],
    ["Linux command-line client",                                        ["Linux", "CLI"],                    ["yes",       "no",       "yes",       "poor",     "yes",     "no",         "no"],       null],
    ["Android support, including auto-fill",                             ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "poor",       "yes"],      null],
    ["Android auto-fill in Chrome",                                      ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "no",         "yes"],      null],
    ["Auto-fill in Android work profile",                                ["Android", "Enterprise"],           ["yes",       "yes",      ["yes", "e"], "yes",     "yes",     "yes",        "unknown"],  null],
    ["Android auto-fill shows full usernames",                           ["Android"],                         ["yes",       "yes",      "yes",       "yes",      "yes",     "no",         "yes"],      null],
    ["iOS support, including auto-fill",                                 ["iOS"],                             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Free two-factor authentication",                                   [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Paid two-factor authentication",                                   [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["YubiKey support in browser (Enterprise)",                          ["Enterprise", "YubiKey"],           ["yes",       "no",       "yes",       ["yes", "k"], "yes",   "no",         "no"],       null],
    ["YubiKey support in browser (Personal)",                            ["Personal", "YubiKey"],             ["yes",       "no",       "yes",       ["yes", "k"], "yes",   "no",         "no"],       null],
    ["YubiKey support in Android",                                       ["Android", "YubiKey"],              ["no",        "no",       "no",        ["yes", "k"], "no",    "no",         "no"],       null],
    ["YubiKey support in iOS (NFC)",                                     ["iOS", "YubiKey"],                  ["no",        "no",       "no",        ["yes", "k"], "no",    "no",         "no"],       null],
    ["YubiKey support in iOS (Lightning)",                               ["iOS", "YubiKey"],                  ["yes",       "no",       "no",        ["yes", "k"], "yes",   "no",         "no"],       null],
    ["Saved password in Android, iOS",                                   ["OR", "Android", "iOS"],            ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Fingerprint login in Android, iOS",                                ["OR", "Android", "iOS"],            ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Free synchronization across devices",                              [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Paid synchronization across devices",                              [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Import from LastPass",                                             ["LastPassMigration"],               ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        ["poor", "f"]], null],
    ["LastPass import distinguishes work from personal items",           ["LastPassMigration", "Enterprise"], ["no",        "no",       "no",        "yes",      "no",      "no",         "no"],       null],
    ["Preserves LastPass folders in some way when importing",            ["LastPassMigration"],               ["yes",       "doubtful", "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Personal linked account support (or the equivalent)",              ["Enterprise"],                      ["yes",       "poor",     "yes",       "yes",      ["poor", "d"], "no",     "no"],       null],
    ["Create new items in web app",                                      [],                                  ["yes",       "unknown",  "yes",       "yes",      "yes",     "unknown",    "no"],       null],
    ["Save location (personal vs. work) specified at creation time",     ["Enterprise"],                      ["yes",       "no",       "yes",       "yes",      "no",      "no",         "no"],       null],
    ["Save location (folder / collection / space) editable in web app",  [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Sensible password quality checks for master password (personal)",  [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Sensible password quality checks for master password (enterprise)", ["Enterprise"],                     ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Password history on Linux",                                        ["Linux"],                           ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Password history on Windows, macOS",                               ["OR", "Windows", "macOS"],          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Secure notes",                                                     [],                                  ["yes",       "yes",      "yes",       "yes",      "yes",     "poor",       "yes"],      null],
    ["Attachments on notes on Linux",                                    ["Linux"],                           ["no",        "no",       "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Attachments on notes on Windows, macOS",                           ["OR", "Windows", "macOS"],          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Shared folders with access control on Linux",                      ["Linux", "Enterprise"],             ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Shared folders with access control on Windows",                    ["Windows", "Enterprise"],           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Shared folders with access control on macOS",                      ["macOS", "Enterprise"],             ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Items can exist in multiple groups with distinct access control",  ["Enterprise"],                      ["no",        "no",       "yes",       "no",       "yes",     "yes",        "no"],       null],
    ["Nested folders in web app",                                        [],                                  ["no",        "no",       "yes",       "yes",      "yes",     "poor",       "yes"],      null],
    ["Nested folders in browser",                                        [],                                  ["no",        "no",       "yes",       "yes",      "yes",     "poor",       "yes"],      null],
    ["Nested folders in desktop app",                                    [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "poor",       "yes"],      null],
    ["Can copy stored items on Linux",                                   ["Linux"],                           ["no",        "no",       "no",        "yes",      "no",      "yes",        "yes"],      null],
    ["Can copy stored items on Windows, macOS",                          ["OR", "Windows", "macOS"],          ["yes",       "no",       "no",        "yes",      "no",      "yes",        "yes"],      null],
    ["Can 'unshare' shared item",                                        [],                                  ["yes",       "yes",      "no",        "yes",      "yes",     "yes",        "yes"],      null],
    ["Resists auto-filling invisible forms",                             [],                                  ["yes",       "yes",      "yes",       "no",       "yes",     "unknown",    "unknown"],  null],
    ["Browser plugin only fills selected form",                          [],                                  ["no",        "unknown",  "no",        "no",       "unknown", "yes",        "unknown"],  null],
    ["Browser plugin displays icon in form fields",                      [],                                  ["yes",       "yes",      "no",        "yes",      "yes",     "yes",        "no"],       null],
    ["Browser plugin prompts to save new sites on Linux",                ["Linux"],                           ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Browser plugin prompts to save new sites on Windows, macOS",       ["OR", "Windows", "macOS"],          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["2FA integrated into login entries in vault",                       [],                                  ["yes",       "yes",      "yes",       "no",       "yes",     "no",         "no"],       null],
    ["Auto-fill in browser disabled by default",                         [],                                  ["yes",       "no",       "yes",       "no",       "yes",     "yes",        "yes"],      null],
    ["Auto-fill in browser can be disabled by preference",               [],                                  ["yes",       "no",       "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["Admins can reset passwords",                                       ["Enterprise"],                      ["yes",       "yes",      "no",        "yes",      ["no", "m"], "no",       "no"],       null],
    ["Admins can reset other people's 2fa",                              ["Enterprise"],                      ["yes",       "no",       "no",        "yes",      ["no", "m"], "yes",      "no"],       null],
    ["Admins can access other people's unshared credentials",            ["Enterprise"],                      ["yes",       "no",       "no",        "yes",      "yes",     "no",         "no"],       null],
    ["2fa can be enforced at the organization level",                    ["Enterprise"],                      ["yes",       "no",       ["no", "c"], "yes",      "yes",     "yes",        "yes"],      null],
    ["2fa can be audited at the organization level",                     ["Enterprise"],                      ["yes",       "no",       "yes",       "yes",      "yes",     "no",         "no"],       null],
    ["Exporting items on Linux",                                         ["Linux"],                           [["poor", "j"], "no",     "yes",       "yes",      "yes",     "yes",        "no"],       null],
    ["Exporting items on Windows, macOS",                                ["OR", "Windows", "macOS"],          ["yes",       "yes",      "yes",       "yes",      "yes",     "yes",        "yes"],      null],
    ["App export includes attachments",                                  [],                                  ["no",        "unknown",  "no",        "no",       "no",      "no",         "yes"],      null],
    ["CLI export includes attachments",                                  [],                                  [["poor", "a"], "no",     ["poor", "a"], ["poor", "a"], ["yes", "b"], "no", "no"],       null],
    ["Responsive to bug reports and feature requests",                   [],                                  ["no",        "unknown",  "yes",       "no",       "no",      "unknown",    "unknown"],  null],
    ["Open source",                                                      [],                                  ["no",        "no",       "yes",       "no",       "no",      "no",         "no"],       null],
    ["Option to self-host",                                              ["SelfHosting"],                     ["poor",      "no",       "yes",       "no",       "no",      "no",         "no"],       null],
    ["Users can delete own account (customer service not needed)",       ["Personal"],                        ["yes",       "yes",      "yes",       "yes",      "no",      "yes",        "yes"],      null],
    ["Admins can delete business account (customer service not needed)", ["Enterprise"],                      ["yes",       "yes",      "yes",       "no",       "no",      "yes",        "no"],       null],
    ["Enterprise price per user per month",                              ["Enterprise"],                      [7.99,        4.00,       3.00,        6.00,       3.75,      3.60,         [3.33, "g"]], priceCompare],
    ["Personal price per user per month (no Attachments or YubiKey)",    ["Personal"],                        [2.99,        4.99,       0.00,        2.00,       2.50,      0,            [1.99, "h"]], priceCompare],
    ["Personal price per user per month (w/Attachments & YubiKey)",      ["Personal"],                        [2.99,        4.99,       0.84,        2.00,       2.50,      0,            [1.99, "i"]], priceCompare],
    ["Has a useful status page that can be subscribed to",               [],                                  ["yes",       "yes",      "no",        "yes",      "yes",     "yes",        "no"],       null],
    ["Number of outages in the past six months",                         [],                                  [1,           12,         0,           12,         0,         2,            "unknown"],  outagesCompare],
  ];

  var notes = {
    a: "CLI allows individual attachments to be exported. The user would have to write a script to iterate through and export all of them.",
    b: "Attachments can be exported in Keepass format.",
    c: "On the product roadmap, not yet implemented as of 2019-01-02.",
    d: "You can share individual items or \"vaults\" (folders with distinct access control) between accounts, but there is no way to share the entire contents of one account with another. Alternatively, if you're a paying customer, the apps will remember multiple Keeper accounts and let you switch between them, which is better than nothing but not nearly as useful as being able to see your personal and work credentials at the same time.",
    e: "In work profile apps Bitwarden might not pop up a dialog automatically inviting you to auto-fill, but it'll display a notification you can tap to do it.",
    f: "Only on Windows.",
    g: "Paid annually. Price goes down for more users and for multi-year subscriptions.",
    h: "Paid annually. Price goes down for multi-year subscriptions. There is a free version but it's not worth considering given that it doesn't sync into the cloud or between devices.",
    i: "Actually RoboForm doesn't support attachments or YubiKeys (see above), so if you care about those features, the price quoted here is irrelevant. :-/",
    j: "There's no built-in bulk export on Linux, but you can write a script to do it with the CLI.",
    k: "LastPass's YubiKey support uses YubiCo's proprietary OTP protocol rather than the more secure U2F (a.k.a., FIDO2, WebAuthn) that the other password managers use. It's probably good enough, but this is nevertheless an important distinction.",
    m: "This functionality is on Keeper's roadmap and expected to be delivered early in 2020.",
  };

  var dataTags = [];
  for (var i = 1; i < rawData.length; i++) {
    var tags = rawData[i][1];
    for (var j = 0; j < tags.length; j++)
      if (! dataTags.includes(tags[j])) dataTags.push(tags[j]);
    dataTags.sort();
  }

  function yesNoCompare(n1, v1, n2, v2) {
    if (v1 == v2) return "tie";
    if (v1 == "yes") return n1;
    if (v2 == "yes") return n2;
    if (v1 == "no") return n2;
    if (v2 == "no") return n1;
    return "tie";
  }

  function priceCompare(n1, v1, n2, v2) {
    if (v1 == v2) return "tie";
    return v1 < v2 ? n1 : n2;
  }

  function outagesCompare(n1, v1, n2, v2) {
    if (v1 == v2) return "tie";
    if (v1 == "unknown") return n2;
    if (v2 == "unknown") return n1;
    return v1 < v2 ? n1 : n2;
  }

  function getValue(v) {
    if (Array.isArray(v))
      return v[0];
    return v;
  }

  function formatValue(v) {
    v = getValue(v);
    if (v + 0 == v) return v;
    if (v == "yes") return v;
    if (v == "no") return "<span style='color: red'>" + v + "</span>";
    return "<span style='color: orange'>" + v + "</span>";
  }

  function formatNotes(v, current, mappings) {
    if (! Array.isArray(v))
      return "";
    var foundNotes = [];
    for (var i = 1; i < v.length; i++) {
      if (! mappings[v[i]]) {
        mappings[v[i]] = current[0];
        current[0]++;
      }
      foundNotes.push("<sup>" + mappings[v[i]] + "</sup>");
    }
    return foundNotes.join(",");
  }

  function formatTable() {
    var compare1, compare2;
    var currentNote = [1];
    var noteMappings = {};

    try {
      compare1 = document.getElementById('compare1').value;
      compare2 = document.getElementById('compare2').value;
    }
    catch {
      // First time page is loaded.
    }
    var products = rawData[0][2];
    var comparing, index1, index2, score1, score2;
    if (compare1 && compare2) {
      comparing = true;
      score1 = score2 = 0;
      for (var i = 0; i < products.length; i++) {
        if (products[i] == compare1) index1 = i;
        if (products[i] == compare2) index2 = i;
      }
    }

    var required = [];
    for (var i = 0; i < rawData.length; i++) {
      try {
        if (document.getElementById("req" + i).checked) {
          required.push(i);
        }
      }
      catch {}
    }

    var excluded = [];
    for (var i = 0; i < rawData.length; i++) {
      if (! required.includes(i)) continue;
      if (rawData[i][3]) // Non-boolean feature
        continue;
      for (var j = 0; j < products.length; j++) {
        if (excluded.includes(j)) continue;
        if (getValue(rawData[i][2][j]) != "yes")
          excluded.push(j);
      }
    }

    var featureList = "<p>Features you care about:";
    var wantFeatures = [];
    for (var i = 0; i < dataTags.length; i++) {
      var feature = dataTags[i];
      if (feature == "OR") continue;
      var id = "feature" + feature;
      var checked;
      try {
        checked = document.getElementById(id).checked;
      }
      catch {
        checked = true;
      }
      if (checked) wantFeatures.push(feature);
      featureList += " <span style='white-space: nowrap;'>" +
        "<input type='checkbox' id='" + id + "'";
      if (checked) featureList += " checked";
      featureList += " onchange='passwordManagerTable()'><label for='" + id + "'>" +
        feature + "</label></span>\n";
    }
    featureList += "</p>";

    var t = "<form>\n";
    t += "<table border>\n";

    var header = "<tr>";
    header += "<th>Req?</th>";
    header += "<th>" + rawData[0][0] + "</th>";
    for (var i = 0; i < products.length; i++)
      if (! excluded.includes(i))
        header += "<th>" + products[i] + "</th>";
    if (comparing) header += "<th>" + compare1 + " vs. " + compare2 + "</th>\n";
    header += "</tr>\n";
    for (var i = 1; i < rawData.length; i++) {
      if (i % 10 == 1)
        t += header;
      var tags = rawData[i][1];
      if (tags.length) {
        var found;
        if (tags[0] == "OR") {
          tags = tags.slice(1);
          found = false;
          for (var j = 0; j < wantFeatures.length; j++)
            if (tags.includes(wantFeatures[j])) {
              found = true;
              break;
            }
        }
        else {
          found = true;
          for (var j = 0; j < tags.length; j++)
            if (! wantFeatures.includes(tags[j])) {
              found = false;
              break;
            }
        }
        if (! found) continue;
      }
      t += "<tr>";
      var cmp = rawData[i][3];
      if (cmp)
        t += "<td></td>";
      else {
        t += "<td><input type='checkbox' id='req" + i + "' onchange='passwordManagerTable()'";
        if (required.includes(i))
          t += " checked";
        t += "/>";
      }
      t+= "<td>" + rawData[i][0] + "</td>";
      var values = rawData[i][2];
      for (var j = 0; j < values.length; j++)
        if (! excluded.includes(j)) {
          t += "<td>" + formatValue(values[j]) +
            formatNotes(values[j], currentNote, noteMappings) + "</td>";
        }
      if (comparing) {
        if (! cmp)
          cmp = yesNoCompare;
        winner = cmp(compare1, getValue(values[index1]),
                     compare2, getValue(values[index2]));
        if (winner == compare1) score1++;
        else if (winner == compare2) score2++;
        t += "<td>" + winner + "</td>";
      }
      t += "</tr>\n";
    }

    if (comparing) {
      t += "<tr><th align=left colspan='" +
        (products.length + 2 - excluded.length) +
        "'>Score:</th>";
      t += "<th align=left>" + compare1 + " - " + score1 + "<br/>" +
        compare2 + " - " + score2 + "</th></tr>\n";
    }

    t += "</table>\n";
    t += featureList;
    t += "<p>Compare ";
    t += "<select id='compare1' onchange='passwordManagerTable()'>\n";
    t += "<option value=''>(select)</option>\n";
    for (var i = 0; i < products.length; i++) {
      if (products[i] == compare2) continue;
      t += "<option value='" + products[i] + "'";
      if (products[i] == compare1) t += " selected";
      t += ">" + products[i] + "</option>\n";
    }
    t += "</select>\n";
    t += " to ";
    t += "<select id='compare2' onchange='passwordManagerTable()'>\n";
    t += "<option value=''>(select)</option>\n";
    for (var i = 0; i < products.length; i++) {
      if (products[i] == compare1) continue;
      t += "<option value='" + products[i] + "'";
      if (products[i] == compare2) t += " selected";
      t += ">" + products[i] + "</option>\n";
    }
    t += "</select>\n";
    t += "</p>\n";
    t += "</form>\n";
    if (currentNote[0] > 1) {
      t += "<hr/>\n";
      var reverseMappings = [];
      for (const key of Object.keys(noteMappings))
        reverseMappings[noteMappings[key]] = key;
      for (var i = 1; i < currentNote[0]; i++)
        t += "<p><sup>" + i + "</sup>" + notes[reverseMappings[i]] +
        "</p>\n";
    }
    return t;
  }

  function drawTable(node) {
    node.innerHTML = formatTable();
  }

  function onLoad() {
    var node;
    try {
      node = document.getElementById(passwordManagerDivId);
    }
    catch {}
    if (! node)
      node = document.body;
    drawTable(node);
  }

  onLoad();
}

// Local variables:
// js-indent-level: 2
// End:
