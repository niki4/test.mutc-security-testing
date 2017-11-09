var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://test.mutc.ru/', 'dir': '_m0/0', 'linked': 2, 'len': 383 },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'dir': '_m0/1', 'linked': 2, 'len': 3666 },
    { 'url': 'http://test.mutc.ru/cgi-bin/', 'dir': '_m0/2', 'linked': 5, 'len': 329 },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'dir': '_m0/3', 'linked': 5, 'len': 2751 },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'dir': '_m0/4', 'linked': 0, 'len': 2196 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i1/5' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': 'sex', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://test.mutc.ru/cgi-bin/bug.pl', 'extra': '', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://test.mutc.ru/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://test.mutc.ru/', 'extra': 'nginx', 'sid': '0', 'dir': '_i6/0' } ]
  }
];

