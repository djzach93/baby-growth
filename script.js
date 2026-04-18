// ═══════════════════════════════════════════════════════════════════════════════
// WHO LMS Parameters (Lambda, Mu, Sigma) for accurate percentile calculation
// Source: WHO Child Growth Standards, 2006
// Weight: kg | Height/Head: cm
// Formula: z = ((x/M)^L - 1) / (L*S)  [if L≠0]
//          z = ln(x/M) / S              [if L=0]
// ═══════════════════════════════════════════════════════════════════════════════
const WHO_LMS = {
  weight: {
    boys: [
      [0.3487,3.3464,0.14602],[0.2297,4.4709,0.13395],[0.1970,5.5675,0.12979],
      [0.1738,6.3762,0.12535],[0.1553,7.0023,0.12120],[0.1395,7.5105,0.11771],
      [0.1257,7.9340,0.11477],[0.1134,8.2970,0.11218],[0.1021,8.6151,0.10983],
      [0.0917,8.9014,0.10765],[0.0820,9.1649,0.10560],[0.0730,9.4122,0.10368],
      [0.0648,9.6479,0.10188],[0.0571,9.8749,0.10018],[0.0500,10.0953,0.09858],
      [0.0433,10.3108,0.09705],[0.0371,10.5228,0.09558],[0.0313,10.7319,0.09416],
      [0.0259,10.9385,0.09279],[0.0208,11.1430,0.09146],[0.0161,11.3462,0.09018],
      [0.0117,11.5486,0.08893],[0.0076,11.7504,0.08772],[0.0037,11.9514,0.08654],
      [0.0000,12.1521,0.08540]
    ],
    girls: [
      [0.3809,3.2322,0.14171],[0.1714,4.1873,0.13724],[0.1714,5.1282,0.13000],
      [0.2986,5.8458,0.12619],[0.2986,6.4237,0.12188],[0.2986,6.8985,0.11832],
      [0.2986,7.2970,0.11534],[0.2986,7.6422,0.11282],[0.2986,7.9487,0.11070],
      [0.2986,8.2249,0.10891],[0.2986,8.4800,0.10737],[0.2986,8.7192,0.10604],
      [0.2986,8.9481,0.10488],[0.2986,9.1699,0.10388],[0.2986,9.3870,0.10300],
      [0.2986,9.6008,0.10222],[0.2986,9.8124,0.10153],[0.2986,10.0226,0.10091],
      [0.2986,10.2315,0.10036],[0.2986,10.4393,0.09986],[0.2986,10.6464,0.09941],
      [0.2986,10.8534,0.09900],[0.2986,11.0608,0.09862],[0.2986,11.2688,0.09827],
      [0.2986,11.4775,0.09794]
    ]
  },
  height: {
    boys: [
      [1,49.8842,0.03795],[1,54.7244,0.03557],[1,58.4249,0.03424],
      [1,61.4292,0.03328],[1,63.8860,0.03257],[1,65.9026,0.03204],
      [1,67.6236,0.03165],[1,69.1645,0.03139],[1,70.5994,0.03124],
      [1,71.9687,0.03117],[1,73.2812,0.03118],[1,74.5388,0.03126],
      [1,75.7488,0.03138],[1,76.9186,0.03154],[1,78.0497,0.03172],
      [1,79.1458,0.03192],[1,80.2113,0.03215],[1,81.2487,0.03240],
      [1,82.2587,0.03268],[1,83.2418,0.03297],[1,84.1986,0.03329],
      [1,85.1288,0.03363],[1,86.0326,0.03399],[1,86.9109,0.03437],
      [1,87.7651,0.03476]
    ],
    girls: [
      [1,49.1477,0.03790],[1,53.6872,0.03628],[1,57.0673,0.03568],
      [1,59.8029,0.03496],[1,62.0899,0.03431],[1,64.0301,0.03375],
      [1,65.7311,0.03332],[1,67.2873,0.03302],[1,68.7498,0.03284],
      [1,70.1435,0.03274],[1,71.4818,0.03270],[1,72.7710,0.03272],
      [1,74.0150,0.03279],[1,75.2176,0.03289],[1,76.3817,0.03303],
      [1,77.5099,0.03318],[1,78.6029,0.03335],[1,79.6613,0.03354],
      [1,80.6852,0.03374],[1,81.6756,0.03396],[1,82.6333,0.03419],
      [1,83.5595,0.03443],[1,84.4544,0.03468],[1,85.3188,0.03494],
      [1,86.1527,0.03521]
    ]
  },
  head: {
    boys: [
      [1,34.4618,0.03686],[1,37.2759,0.03133],[1,38.9472,0.02915],
      [1,40.1807,0.02779],[1,41.1545,0.02686],[1,41.9756,0.02627],
      [1,42.6537,0.02585],[1,43.2499,0.02558],[1,43.7838,0.02542],
      [1,44.2692,0.02536],[1,44.7123,0.02538],[1,45.1165,0.02547],
      [1,45.4895,0.02561],[1,45.8326,0.02578],[1,46.1489,0.02598],
      [1,46.4385,0.02620],[1,46.7037,0.02644],[1,46.9470,0.02669],
      [1,47.1693,0.02695],[1,47.3724,0.02722],[1,47.5584,0.02751],
      [1,47.7288,0.02780],[1,47.8849,0.02809],[1,48.0280,0.02839],
      [1,48.1586,0.02870]
    ],
    girls: [
      [1,33.8787,0.03496],[1,36.5463,0.02980],[1,38.0750,0.02844],
      [1,39.1802,0.02749],[1,40.0635,0.02680],[1,40.7874,0.02627],
      [1,41.4321,0.02591],[1,42.0086,0.02566],[1,42.5247,0.02550],
      [1,42.9877,0.02542],[1,43.4022,0.02539],[1,43.7720,0.02541],
      [1,44.1019,0.02546],[1,44.3956,0.02555],[1,44.6557,0.02566],
      [1,44.8854,0.02579],[1,45.0876,0.02594],[1,45.2645,0.02611],
      [1,45.4183,0.02629],[1,45.5508,0.02649],[1,45.6634,0.02669],
      [1,45.7578,0.02691],[1,45.8352,0.02713],[1,45.8966,0.02736],
      [1,45.9429,0.02759]
    ]
  }
};

const WHO = {
  weight: {
    boys: {
      0:[2.5,2.9,3.3,3.9,4.4],1:[3.4,3.9,4.5,5.1,5.7],2:[4.3,4.9,5.6,6.3,7.1],
      3:[5.0,5.7,6.4,7.2,8.0],4:[5.6,6.2,7.0,7.8,8.7],5:[6.0,6.7,7.5,8.4,9.3],
      6:[6.4,7.1,7.9,8.8,9.8],7:[6.7,7.4,8.3,9.2,10.3],8:[6.9,7.7,8.6,9.6,10.7],
      9:[7.1,7.9,8.9,9.9,11.0],10:[7.4,8.2,9.2,10.2,11.4],11:[7.6,8.4,9.4,10.5,11.7],
      12:[7.7,8.6,9.6,10.8,12.0],15:[8.3,9.2,10.3,11.5,12.8],18:[8.8,9.8,10.9,12.2,13.7],
      21:[9.2,10.2,11.5,12.8,14.5],24:[9.7,10.8,12.2,13.6,15.3]
    },
    girls: {
      0:[2.4,2.8,3.2,3.7,4.2],1:[3.2,3.6,4.2,4.8,5.5],2:[3.9,4.5,5.1,5.8,6.6],
      3:[4.5,5.2,5.8,6.6,7.5],4:[5.0,5.7,6.4,7.3,8.2],5:[5.4,6.1,6.9,7.8,8.8],
      6:[5.7,6.5,7.3,8.2,9.3],7:[6.0,6.8,7.6,8.6,9.7],8:[6.3,7.0,7.9,9.0,10.2],
      9:[6.5,7.3,8.2,9.3,10.5],10:[6.7,7.5,8.5,9.6,10.9],11:[6.9,7.7,8.7,9.9,11.2],
      12:[7.0,7.9,8.9,10.1,11.5],15:[7.6,8.5,9.6,10.9,12.4],18:[8.1,9.1,10.2,11.6,13.2],
      21:[8.6,9.6,10.9,12.3,14.0],24:[9.0,10.2,11.5,13.0,14.8]
    }
  },
  height: {
    boys: {
      0:[46.1,47.9,49.9,51.8,53.7],1:[50.8,52.8,54.7,56.7,58.6],2:[54.4,56.4,58.4,60.4,62.4],
      3:[57.3,59.4,61.4,63.5,65.5],4:[59.7,61.8,63.9,66.0,68.0],5:[61.7,63.8,65.9,68.0,70.1],
      6:[63.3,65.5,67.6,69.8,71.9],7:[64.8,67.0,69.2,71.3,73.5],8:[66.2,68.4,70.6,72.8,75.0],
      9:[67.5,69.7,72.0,74.2,76.5],10:[68.7,71.0,73.3,75.6,77.9],11:[69.9,72.2,74.5,76.9,79.2],
      12:[71.0,73.4,75.7,78.1,80.5],15:[74.1,76.6,79.1,81.7,84.2],18:[76.9,79.6,82.3,85.0,87.7],
      21:[79.4,82.3,85.1,88.0,90.9],24:[81.7,84.8,87.8,90.9,93.9]
    },
    girls: {
      0:[45.4,47.3,49.1,51.0,52.9],1:[49.8,51.7,53.7,55.6,57.6],2:[53.0,55.0,57.1,59.1,61.1],
      3:[55.6,57.7,59.8,61.9,64.0],4:[57.8,59.9,62.1,64.3,66.4],5:[59.6,61.8,64.0,66.2,68.5],
      6:[61.2,63.5,65.7,68.0,70.3],7:[62.7,65.0,67.3,69.6,71.9],8:[64.0,66.4,68.7,71.1,73.5],
      9:[65.3,67.7,70.1,72.6,75.0],10:[66.5,69.0,71.5,73.9,76.4],11:[67.7,70.2,72.8,75.3,77.8],
      12:[68.9,71.4,74.0,76.6,79.2],15:[72.0,74.8,77.5,80.3,83.0],18:[74.9,77.8,80.7,83.6,86.5],
      21:[77.5,80.5,83.7,86.7,89.8],24:[80.0,83.3,86.4,89.6,92.9]
    }
  },
  head: {
    boys: {
      0:[31.7,32.9,34.5,36.0,37.3],1:[34.9,36.1,37.3,38.4,39.4],2:[36.8,38.0,39.1,40.2,41.2],
      3:[38.1,39.3,40.5,41.7,42.7],4:[39.2,40.4,41.6,42.8,43.9],5:[40.1,41.3,42.6,43.8,44.9],
      6:[40.9,42.2,43.3,44.6,45.6],7:[41.5,42.7,44.0,45.1,46.3],8:[42.1,43.3,44.5,45.7,46.9],
      9:[42.5,43.8,45.0,46.2,47.4],10:[43.0,44.2,45.4,46.6,47.8],11:[43.4,44.6,45.8,47.0,48.3],
      12:[43.7,44.9,46.1,47.4,48.6],15:[44.4,45.7,46.9,48.2,49.5],18:[45.1,46.3,47.6,48.9,50.2],
      21:[45.6,46.9,48.2,49.5,50.8],24:[46.0,47.3,48.6,50.0,51.3]
    },
    girls: {
      0:[31.0,32.1,33.9,35.1,36.2],1:[33.9,35.1,36.5,37.7,38.8],2:[35.6,36.8,38.3,39.5,40.6],
      3:[36.9,38.1,39.5,40.7,41.9],4:[37.9,39.2,40.6,41.9,43.1],5:[38.8,40.1,41.5,42.8,44.0],
      6:[39.6,40.9,42.2,43.5,44.8],7:[40.2,41.5,42.9,44.3,45.5],8:[40.7,42.1,43.5,44.8,46.1],
      9:[41.2,42.6,44.0,45.3,46.6],10:[41.7,43.0,44.4,45.8,47.1],11:[42.1,43.5,44.9,46.2,47.5],
      12:[42.4,43.8,45.2,46.6,47.9],15:[43.2,44.7,46.1,47.5,48.9],18:[43.9,45.3,46.8,48.2,49.6],
      21:[44.5,45.9,47.3,48.8,50.2],24:[44.9,46.4,47.8,49.3,50.7]
    }
  }
};

const CDC = {
  weight: {
    boys: {
      0:[2.5,2.9,3.4,3.9,4.5],1:[3.5,4.0,4.6,5.2,5.8],2:[4.4,5.0,5.7,6.4,7.2],
      3:[5.1,5.8,6.5,7.3,8.2],4:[5.6,6.4,7.1,8.0,9.0],5:[6.1,6.9,7.7,8.6,9.7],
      6:[6.4,7.2,8.1,9.1,10.2],7:[6.7,7.6,8.5,9.5,10.7],8:[7.0,7.9,8.9,9.9,11.1],
      9:[7.2,8.1,9.1,10.2,11.5],10:[7.5,8.4,9.4,10.5,11.8],11:[7.7,8.6,9.7,10.8,12.2],
      12:[7.8,8.8,9.9,11.1,12.5],15:[8.4,9.5,10.7,12.0,13.5],18:[8.9,10.0,11.3,12.7,14.3],
      21:[9.4,10.5,11.9,13.3,15.0],24:[9.8,11.0,12.4,13.9,15.7]
    },
    girls: {
      0:[2.4,2.7,3.2,3.7,4.2],1:[3.1,3.5,4.1,4.7,5.4],2:[3.9,4.4,5.0,5.7,6.5],
      3:[4.4,5.1,5.7,6.5,7.5],4:[4.9,5.6,6.3,7.2,8.2],5:[5.3,6.1,6.9,7.8,8.9],
      6:[5.7,6.4,7.3,8.3,9.5],7:[5.9,6.7,7.6,8.7,9.9],8:[6.2,7.0,8.0,9.1,10.4],
      9:[6.4,7.2,8.3,9.5,10.8],10:[6.6,7.5,8.5,9.7,11.1],11:[6.8,7.7,8.8,10.0,11.5],
      12:[7.0,8.0,9.1,10.4,11.9],15:[7.6,8.6,9.8,11.2,12.8],18:[8.1,9.2,10.5,11.9,13.6],
      21:[8.6,9.7,11.0,12.6,14.4],24:[9.0,10.2,11.5,13.2,15.1]
    }
  },
  height: {
    boys: {
      0:[46.3,48.1,50.0,52.0,53.9],1:[51.0,53.0,55.0,57.1,59.1],2:[54.5,56.6,58.7,60.7,62.9],
      3:[57.5,59.6,61.7,63.9,66.0],4:[59.9,62.1,64.3,66.4,68.6],5:[61.9,64.1,66.4,68.6,70.9],
      6:[63.5,65.8,68.1,70.4,72.7],7:[65.0,67.3,69.7,72.0,74.4],8:[66.4,68.7,71.1,73.5,75.9],
      9:[67.7,70.1,72.5,74.9,77.3],10:[68.9,71.4,73.8,76.3,78.7],11:[70.1,72.6,75.1,77.6,80.1],
      12:[71.2,73.8,76.3,78.9,81.4],15:[74.3,77.0,79.6,82.3,85.0],18:[77.1,79.9,82.7,85.5,88.3],
      21:[79.6,82.5,85.5,88.4,91.3],24:[81.9,84.9,88.0,91.0,94.1]
    },
    girls: {
      0:[45.5,47.4,49.2,51.1,53.0],1:[49.9,51.8,53.8,55.7,57.7],2:[53.0,55.1,57.2,59.2,61.3],
      3:[55.7,57.9,60.0,62.1,64.3],4:[57.9,60.2,62.4,64.6,66.9],5:[59.7,62.1,64.4,66.7,69.1],
      6:[61.3,63.8,66.1,68.5,70.9],7:[62.8,65.3,67.7,70.1,72.5],8:[64.2,66.7,69.2,71.7,74.2],
      9:[65.5,68.1,70.6,73.2,75.7],10:[66.8,69.4,71.9,74.5,77.1],11:[68.0,70.7,73.3,75.9,78.5],
      12:[69.2,71.9,74.6,77.2,79.9],15:[72.4,75.3,78.1,81.0,83.9],18:[75.2,78.2,81.2,84.2,87.1],
      21:[77.9,81.0,84.2,87.3,90.4],24:[80.3,83.6,86.8,90.1,93.4]
    }
  },
  head: { boys: WHO.head.boys, girls: WHO.head.girls }
};

// ─── State ────────────────────────────────────────────────────────────────────
let profiles = JSON.parse(localStorage.getItem('babyProfiles') || '[]');
let currentProfileId = localStorage.getItem('currentProfileId') || null;
let charts = {};
let activeTab = 'weight';
let pendingImportData = [];

// ─── UTILITIES (STRICT LOCAL TIME FOR CALCULATIONS) ───────────────────────────
function getLocalYYYYMMDD(date) {
    if (!date) date = new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function parseDateStrict(str) {
    if (!str) return new Date();
    const s = String(str).split('T')[0].trim();
    
    // Safely extract year, month, and day regardless of common delimiters
    const parts = s.split(/[-/.]/);
    if (parts.length === 3) {
        let p0 = parseInt(parts[0], 10);
        let p1 = parseInt(parts[1], 10);
        let p2 = parseInt(parts[2], 10);
        
        let y, m, d;
        if (p0 >= 1000) {
            // YYYY-MM-DD
            y = p0; m = p1; d = p2;
        } else if (p2 >= 1000) {
            // XX/XX/YYYY
            y = p2;
            if (p0 > 12) {
                // DD/MM/YYYY
                d = p0; m = p1;
            } else {
                // MM/DD/YYYY
                m = p0; d = p1;
            }
        }
        if (y && m && d) {
            return new Date(y, m - 1, d);
        }
    }
    
    // Fallback if parsing fails (should rarely happen)
    const fallback = new Date(str);
    if (!isNaN(fallback.getTime())) {
        fallback.setHours(0,0,0,0);
        return fallback;
    }
    return new Date();
}

function getAgeMonths(dobStr, measDateStr) {
    const dob = parseDateStrict(dobStr);
    const meas = parseDateStrict(measDateStr);
    const diffMs = meas.getTime() - dob.getTime();
    if (diffMs <= 0) return 0;
    return diffMs / (1000 * 60 * 60 * 24 * 30.4375);
}

function formatAge(months) {
    if (months === undefined || months === null || isNaN(months) || months <= 0) return '0d';
    const totalDays = Math.round(months * 30.4375);
    if (totalDays < 30) return `${totalDays}d`;
    
    const m = Math.floor(months);
    const remainingDays = Math.round((months - m) * 30.4375);
    const w = Math.floor(remainingDays / 7);
    
    if (months < 24) {
        if (w > 0) return `${m}mo ${w}w`;
        if (remainingDays > 0) return `${m}mo ${remainingDays}d`;
        return `${m}mo`;
    }
    const y = Math.floor(m / 12);
    const remM = m % 12;
    return remM > 0 ? `${y}y ${remM}mo` : `${y}y`;
}

function formatDate(dateStr) {
    const d = parseDateStrict(dateStr);
    return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
}

// ─── File System Access API ───────────────────────────────────────────────────
let rootDirHandle = null;

async function openSettingsDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('babyTrackerDB', 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings');
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
}

async function loadPersistedDirHandle() {
  try {
    const db = await openSettingsDB();
    const tx = db.transaction('settings', 'readonly');
    const req = tx.objectStore('settings').get('rootDir');
    req.onsuccess = async () => {
      const handle = req.result;
      if (!handle) return;
      try {
        const perm = await handle.queryPermission({ mode: 'readwrite' });
        if (perm === 'granted') { rootDirHandle = handle; showFolderStatus(); return; }
      } catch(e) {}
    };
  } catch(e) {}
}

async function persistDirHandle(handle) {
  try {
    const db = await openSettingsDB();
    const tx = db.transaction('settings', 'readwrite');
    tx.objectStore('settings').put(handle, 'rootDir');
  } catch(e) {}
}

async function setRootFolder() {
  if (!('showDirectoryPicker' in window)) {
    alert('Your browser does not support the File System Access API.\nFiles will be downloaded normally instead.');
    return;
  }
  try {
    const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
    rootDirHandle = handle;
    await persistDirHandle(handle);
    await handle.getDirectoryHandle('cache', { create: true });
    await handle.getDirectoryHandle('exports', { create: true });
    showFolderStatus();
    showImportStatus(`Save folder set! Cache → .../cache/  |  Exports → .../exports/`, 'success');
  } catch(e) {}
}

function showFolderStatus() {
  if (!rootDirHandle) return;
  const bar = document.getElementById('folderStatus');
  bar.style.display = 'block';
  bar.textContent = `📁 Save folder: "${rootDirHandle.name}" — cache/ and exports/ subfolders active`;
}

async function writeToFolder(subfolder, filename, content) {
  if (!rootDirHandle) return false;
  try {
    const perm = await rootDirHandle.queryPermission({ mode: 'readwrite' });
    if (perm !== 'granted') {
      const req = await rootDirHandle.requestPermission({ mode: 'readwrite' });
      if (req !== 'granted') return false;
    }
    const dir = await rootDirHandle.getDirectoryHandle(subfolder, { create: true });
    const fh = await dir.getFileHandle(filename, { create: true });
    const w = await fh.createWritable();
    await w.write(typeof content === 'string' ? content : JSON.stringify(content, null, 2));
    await w.close();
    return true;
  } catch(e) { return false; }
}

async function saveCacheNow() {
  const data = { profiles, savedAt: new Date().toISOString(), version: 2 };
  const filename = `profiles_${getLocalYYYYMMDD()}.json`;
  const content = JSON.stringify(data, null, 2);
  saveProfiles();

  if (rootDirHandle) {
    const ok = await writeToFolder('cache', 'profiles_cache.json', content);
    if (ok) {
      await writeToFolder('cache', filename, content);
      showImportStatus('Cache saved to cache/profiles_cache.json', 'success');
      return;
    }
  }
  downloadBlob('baby_tracker_cache.json', content, 'application/json');
  showImportStatus('Cache downloaded', 'info');
}

function migrateWeightData() {
  let migrated = false;
  profiles.forEach(p => {
    p.measurements.forEach(m => {
      if (m.weight != null && m.weight < 30) {
        m.weight = Math.round(m.weight * 1000);
        migrated = true;
      }
    });
  });
  if (migrated) saveProfiles();
}

function saveProfiles() {
  localStorage.setItem('babyProfiles', JSON.stringify(profiles));
  localStorage.setItem('currentProfileId', currentProfileId || '');
}

function getCurrentProfile() {
  return profiles.find(p => p.id === currentProfileId);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
window.onload = async function() {
  document.getElementById('measDate').value = getLocalYYYYMMDD();
  migrateWeightData();
  await loadPersistedDirHandle();
  renderProfileSelect();
  if (currentProfileId && profiles.find(p => p.id === currentProfileId)) {
    renderAll();
  }
};

function normalCDF(z) {
  const a1=0.254829592, a2=-0.284496736, a3=1.421413741, a4=-1.453152027, a5=1.061405429;
  const p=0.3275911, sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
  return 0.5 * (1 + sign * y);
}

function getLMSAtAge(type, gender, ageMonths) {
  const table = WHO_LMS[type][gender === 'male' ? 'boys' : 'girls'];
  const clampedAge = Math.max(0, Math.min(24, ageMonths));
  const lo = Math.floor(clampedAge), hi = Math.min(24, Math.ceil(clampedAge));
  if (lo === hi) return table[lo];
  const t = clampedAge - lo;
  return [
    table[lo][0] + t*(table[hi][0]-table[lo][0]),
    table[lo][1] + t*(table[hi][1]-table[lo][1]),
    table[lo][2] + t*(table[hi][2]-table[lo][2])
  ];
}

function zScoreWHO(value, type, gender, ageMonths) {
  const [L, M, S] = getLMSAtAge(type, gender, ageMonths);
  if (Math.abs(L) < 0.0001) return Math.log(value / M) / S;
  return (Math.pow(value / M, L) - 1) / (L * S);
}

function zScoreFromBands(value, bands) {
  const zBands = [-1.881, -1.036, 0, 1.036, 1.881];
  if (value <= bands[0]) return zBands[0] + (value - bands[0]) / (bands[1] - bands[0]) * (zBands[1] - zBands[0]);
  if (value >= bands[4]) return zBands[3] + (value - bands[3]) / (bands[4] - bands[3]) * (zBands[4] - zBands[3]);
  for (let i = 0; i < 4; i++) {
    if (value >= bands[i] && value <= bands[i+1]) {
      const t = (value - bands[i]) / (bands[i+1] - bands[i]);
      return zBands[i] + t * (zBands[i+1] - zBands[i]);
    }
  }
  return 0;
}

function getPercentileInfo(value, ageMonths, type, gender) {
  if (value == null || isNaN(value)) return { pct: null, z: null, label: '—' };
  const std = document.getElementById('refStandard')?.value || 'WHO';

  let z;
  if (std === 'WHO' && ageMonths <= 24) {
    const v = type === 'weight' ? value / 1000 : value;
    z = zScoreWHO(v, type, gender, ageMonths);
  } else {
    const bands = getRefBands(type, gender, ageMonths);
    const v = type === 'weight' ? value / 1000 : value;
    z = zScoreFromBands(v, bands);
  }

  z = Math.max(-4, Math.min(4, z));
  const pct = normalCDF(z) * 100;

  let label;
  if (pct < 0.1) label = '<0.1th';
  else if (pct > 99.9) label = '>99.9th';
  else if (pct < 1) label = `${pct.toFixed(1)}th`;
  else label = `${Math.round(pct)}th`;

  return { pct, z: +z.toFixed(2), label };
}

function getPercentile(value, ageMonths, type, gender) {
  return getPercentileInfo(value, ageMonths, type, gender).label;
}

function getRefBands(type, gender, ageMonths) {
  const std = document.getElementById('refStandard')?.value || 'WHO';
  const refData = std === 'CDC' ? CDC : WHO;
  const gKey = gender === 'male' ? 'boys' : 'girls';
  const table = refData[type][gKey];
  const keys = Object.keys(table).map(Number).sort((a,b)=>a-b);
  if (ageMonths <= keys[0]) return table[keys[0]];
  if (ageMonths >= keys[keys.length-1]) return table[keys[keys.length-1]];
  let lo = keys[0], hi = keys[1];
  for (let i=0;i<keys.length-1;i++) {
    if (ageMonths >= keys[i] && ageMonths <= keys[i+1]) { lo=keys[i]; hi=keys[i+1]; break; }
  }
  const t = (ageMonths-lo)/(hi-lo);
  return table[lo].map((v,i) => +(v + t*(table[hi][i]-v)).toFixed(3));
}

function getLMSCurvePoint(type, gender, ageMonths, zTargets) {
  const [L, M, S] = getLMSAtAge(type, gender, ageMonths);
  return zTargets.map(z => {
    let v;
    if (Math.abs(L) < 0.0001) v = M * Math.exp(S * z);
    else v = M * Math.pow(1 + L * S * z, 1/L);
    return +v.toFixed(3);
  });
}

function openAddProfileModal() {
  document.getElementById('addProfileModal').classList.add('open');
  const d = new Date(); d.setMonth(d.getMonth()-1);
  document.getElementById('newDob').value = getLocalYYYYMMDD(d);
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function saveProfile() {
  const name = document.getElementById('newName').value.trim();
  const dob = document.getElementById('newDob').value;
  const gender = document.getElementById('newGender').value;
  if (!name || !dob) { alert('Please enter a name and date of birth.'); return; }

  const bwRaw = parseFloat(document.getElementById('newBirthWeight').value);
  const bw = !isNaN(bwRaw) ? bwRaw : null;
  const bl = parseFloat(document.getElementById('newBirthLength').value) || null;
  const bh = parseFloat(document.getElementById('newBirthHC').value) || null;

  const id = 'baby_' + Date.now();
  const profile = { id, name, dob, gender, measurements: [] };

  if (bw || bl || bh) {
    profile.measurements.push({ date: dob, weight: bw, height: bl, headCirc: bh, notes: 'Birth measurements' });
  }

  profiles.push(profile);
  currentProfileId = id;
  saveProfiles();
  closeModal('addProfileModal');
  renderProfileSelect();
  renderAll();

  ['newName','newBirthWeight','newBirthLength','newBirthHC'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

function renderProfileSelect() {
  const sel = document.getElementById('profileSelect');
  sel.innerHTML = '<option value="">— Select Baby —</option>';
  profiles.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id; opt.textContent = p.name;
    if (p.id === currentProfileId) opt.selected = true;
    sel.appendChild(opt);
  });
}

function switchProfile(id) {
  currentProfileId = id;
  saveProfiles();
  if (id) renderAll();
  else {
    document.getElementById('profileInfo').innerHTML = '<div class="no-data"><div class="icon">🌱</div><p>Select or add a baby profile.</p></div>';
    document.getElementById('entryForm').style.display = 'none';
    document.getElementById('dashboardArea').style.display = 'none';
    document.getElementById('noProfileMsg').style.display = 'block';
  }
}

function updateMeasAgePreview() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const measDate = document.getElementById('measDate').value;
  if (!measDate) {
    document.getElementById('measAgePreview').textContent = '';
    return;
  }
  const ageM = getAgeMonths(profile.dob, measDate);
  document.getElementById('measAgePreview').textContent = formatAge(ageM) + ' old';
}

function syncWeightGToLbs() {
  const g = parseFloat(document.getElementById('weight').value);
  if (!isNaN(g)) document.getElementById('weightLbs').value = +(g/453.592).toFixed(2);
}
function syncWeightLbsToG() {
  const lbs = parseFloat(document.getElementById('weightLbs').value);
  if (!isNaN(lbs)) document.getElementById('weight').value = Math.round(lbs*453.592);
}
function syncHeightCmToIn() {
  const cm = parseFloat(document.getElementById('height').value);
  if (!isNaN(cm)) document.getElementById('heightIn').value = +(cm/2.54).toFixed(1);
}
function syncHeightInToCm() {
  const v = parseFloat(document.getElementById('heightIn').value);
  if (!isNaN(v)) document.getElementById('height').value = +(v*2.54).toFixed(1);
}
function syncHeadCmToIn() {
  const cm = parseFloat(document.getElementById('headCirc').value);
  if (!isNaN(cm)) document.getElementById('headCircIn').value = +(cm/2.54).toFixed(1);
}
function syncHeadInToCm() {
  const v = parseFloat(document.getElementById('headCircIn').value);
  if (!isNaN(v)) document.getElementById('headCirc').value = +(v*2.54).toFixed(1);
}

function addMeasurement() {
  const profile = getCurrentProfile();
  if (!profile) { alert('Please select a baby profile first.'); return; }

  const date = document.getElementById('measDate').value;
  const weightG = parseFloat(document.getElementById('weight').value) || null;
  const height = parseFloat(document.getElementById('height').value) || null;
  const headCirc = parseFloat(document.getElementById('headCirc').value) || null;
  const notes = document.getElementById('notes').value.trim();

  if (!date) { alert('Please enter a measurement date.'); return; }
  if (!weightG && !height && !headCirc) { alert('Please enter at least one measurement.'); return; }

  profile.measurements.push({ date, weight: weightG, height, headCirc, notes });
  profile.measurements.sort((a,b) => parseDateStrict(a.date).getTime() - parseDateStrict(b.date).getTime());
  saveProfiles();
  renderAll();

  ['weight','weightLbs','height','heightIn','headCirc','headCircIn','notes'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

function renderAll() {
  const profile = getCurrentProfile();
  if (!profile) return;

  document.getElementById('noProfileMsg').style.display = 'none';
  document.getElementById('dashboardArea').style.display = 'block';
  document.getElementById('entryForm').style.display = 'block';

  renderProfileCard(profile);
  renderStats(profile);
  renderChart('weight', profile);
  renderChart('height', profile);
  renderChart('head', profile);
  renderTable(profile);
  updateMeasAgePreview();
}

function renderProfileCard(p) {
  const ageMonths = getAgeMonths(p.dob, getLocalYYYYMMDD());
  const gIcon = p.gender === 'male' ? '👦' : '👧';
  const dob = formatDate(p.dob);
  document.getElementById('profileInfo').innerHTML = `
    <div class="profile-card">
      <div class="baby-name">${gIcon} ${p.name}</div>
      <div class="baby-meta">Born ${dob}</div>
      <div class="baby-meta">${p.gender.charAt(0).toUpperCase()+p.gender.slice(1)} · ${p.measurements.length} measurement${p.measurements.length!==1?'s':''}</div>
      <span class="age-badge">${formatAge(ageMonths)} old</span>
      <button class="btn btn-danger btn-sm" style="margin-top:10px;display:block" onclick="deleteProfile('${p.id}')">Delete Profile</button>
    </div>`;
}

function deleteProfile(id) {
  if (!confirm('Delete this baby profile and all measurements?')) return;
  profiles = profiles.filter(p => p.id !== id);
  if (currentProfileId === id) currentProfileId = profiles[0]?.id || null;
  saveProfiles();
  renderProfileSelect();
  if (currentProfileId) renderAll();
  else switchProfile('');
}

function renderStats(p) {
  const ms = p.measurements;
  if (!ms.length) { document.getElementById('statsRow').innerHTML = ''; return; }
  const last = ms[ms.length-1];
  const ageM = getAgeMonths(p.dob, last.date);

  const wInfo = last.weight ? getPercentileInfo(last.weight, ageM, 'weight', p.gender) : null;
  const hInfo = last.height ? getPercentileInfo(last.height, ageM, 'height', p.gender) : null;
  const hcInfo = last.headCirc ? getPercentileInfo(last.headCirc, ageM, 'head', p.gender) : null;

  const statPctClass = info => {
    if (!info) return '';
    if (info.pct < 3 || info.pct > 97) return 'concern';
    if (info.pct < 10 || info.pct > 90) return 'low';
    return '';
  };

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card highlight">
      <div class="stat-label">Weight</div>
      <div class="stat-value">${last.weight ? last.weight+'g' : '—'}</div>
      <div class="stat-sub">${last.weight ? `≈ ${(last.weight/453.592).toFixed(1)} lbs` : ''}</div>
      ${wInfo ? `<span class="pct-badge ${statPctClass(wInfo)}" style="margin-top:6px">${wInfo.label} pct</span>` : ''}
    </div>
    <div class="stat-card highlight">
      <div class="stat-label">Length</div>
      <div class="stat-value">${last.height ? last.height+'cm' : '—'}</div>
      <div class="stat-sub">${last.height ? `≈ ${(last.height/2.54).toFixed(1)}"` : ''}</div>
      ${hInfo ? `<span class="pct-badge ${statPctClass(hInfo)}" style="margin-top:6px">${hInfo.label} pct</span>` : ''}
    </div>
    <div class="stat-card highlight">
      <div class="stat-label">Head Circ.</div>
      <div class="stat-value">${last.headCirc ? last.headCirc+'cm' : '—'}</div>
      <div class="stat-sub">${last.headCirc ? `≈ ${(last.headCirc/2.54).toFixed(1)}"` : ''}</div>
      ${hcInfo ? `<span class="pct-badge ${statPctClass(hcInfo)}" style="margin-top:6px">${hcInfo.label} pct</span>` : ''}
    </div>`;
}

const chartConfig = {
  weight: { label: 'Weight (g)', unit: 'g', key: 'weight' },
  height: { label: 'Length / Height (cm)', unit: 'cm', key: 'height' },
  head:   { label: 'Head Circumference (cm)', unit: 'cm', key: 'headCirc' }
};

function renderChart(type, profile) {
  const canvasId = { weight:'chartWeight', height:'chartHeight', head:'chartHead' }[type];
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (charts[type]) { charts[type].destroy(); delete charts[type]; }

  const cfg = chartConfig[type];
  const gender = profile.gender;
  const std = document.getElementById('refStandard')?.value || 'WHO';

  const refMonths = Array.from({length:25},(_,i)=>i);
  const zTargets = [-1.881, -1.036, 0, 1.036, 1.881];

  const refCurves = refMonths.map(m => {
    if (std === 'WHO') {
      const pts = getLMSCurvePoint(type, gender, m, zTargets);
      return type === 'weight' ? pts.map(v => +(v*1000).toFixed(0)) : pts;
    } else {
      const bands = getRefBands(type, gender, m);
      return type === 'weight' ? bands.map(v => +(v*1000).toFixed(0)) : bands;
    }
  });

  const datasets = [
    {
      label:'P97', data: refCurves.map((r,i)=>({x:refMonths[i],y:r[4]})),
      borderColor:'#b8d8c4', borderWidth:1.5, borderDash:[5,3],
      pointRadius:0, fill:'+1', backgroundColor:'rgba(168,216,192,0.06)', tension:0.4
    },
    {
      label:'P85', data: refCurves.map((r,i)=>({x:refMonths[i],y:r[3]})),
      borderColor:'#88c4a4', borderWidth:1,
      pointRadius:0, fill:'+1', backgroundColor:'rgba(168,216,192,0.18)', tension:0.4
    },
    {
      label:'P50', data: refCurves.map((r,i)=>({x:refMonths[i],y:r[2]})),
      borderColor:'#5a7d6b', borderWidth:2.5,
      pointRadius:0, fill:false, tension:0.4
    },
    {
      label:'P15', data: refCurves.map((r,i)=>({x:refMonths[i],y:r[1]})),
      borderColor:'#88c4a4', borderWidth:1,
      pointRadius:0, fill:'-1', backgroundColor:'rgba(168,216,192,0.18)', tension:0.4
    },
    {
      label:'P3', data: refCurves.map((r,i)=>({x:refMonths[i],y:r[0]})),
      borderColor:'#b8d8c4', borderWidth:1.5, borderDash:[5,3],
      pointRadius:0, fill:'-1', backgroundColor:'rgba(168,216,192,0.06)', tension:0.4
    }
  ];

  const babyData = profile.measurements
    .filter(m => m[cfg.key] != null)
    .map(m => ({
      x: +getAgeMonths(profile.dob, m.date).toFixed(2),
      y: m[cfg.key] 
    }));

  if (babyData.length) {
    datasets.push({
      label: profile.name,
      data: babyData,
      borderColor: '#c4786a',
      backgroundColor: '#c4786a',
      borderWidth: 2.5,
      pointRadius: 6,
      pointHoverRadius: 9,
      pointStyle: 'circle',
      tension: 0.4,
      fill: false,
      order: -1
    });
  }

  charts[type] = new Chart(canvas, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              if (ctx.dataset.label === profile.name) {
                const info = getPercentileInfo(ctx.parsed.y, ctx.parsed.x, type, gender);
                const dispVal = type === 'weight' ? `${ctx.parsed.y}g` : `${ctx.parsed.y.toFixed(1)}cm`;
                return `${dispVal}  ·  ${info.label} percentile  (Z=${info.z})`;
              }
              const dispVal = type === 'weight' ? `${ctx.parsed.y}g` : `${ctx.parsed.y.toFixed(1)}cm`;
              return `${ctx.dataset.label}: ${dispVal}`;
            },
            title: ctx => `Age: ${formatAge(ctx[0].parsed.x)}`
          }
        }
      },
      scales: {
        x: {
          type: 'linear', min: 0, max: 24,
          title: { display: true, text: 'Age (months)', color: '#7a736c', font: { size: 12 } },
          ticks: { stepSize: 3, callback: v => v+'m', color: '#7a736c' },
          grid: { color: 'rgba(0,0,0,0.05)' }
        },
        y: {
          title: { display: true, text: cfg.label, color: '#7a736c', font: { size: 12 } },
          ticks: {
            color: '#7a736c',
            callback: v => type === 'weight' ? (v >= 1000 ? (v/1000).toFixed(1)+'kg' : v+'g') : v
          },
          grid: { color: 'rgba(0,0,0,0.05)' }
        }
      }
    }
  });

  const legendId = { weight:'legend-weight', height:'legend-height', head:'legend-head' }[type];
  const legendEl = document.getElementById(legendId);
  if (legendEl) {
    legendEl.innerHTML = `
      <div class="legend-item"><span class="legend-line" style="background:#5a7d6b;height:2.5px"></span> <span>P50 Median – ${std}</span></div>
      <div class="legend-item"><span style="display:inline-block;width:20px;height:10px;background:rgba(168,216,192,0.4);border:1px solid #88c4a4;border-radius:2px"></span> <span>P15–P85 range</span></div>
      <div class="legend-item"><span class="legend-line" style="background:#b8d8c4;border-top:1px dashed #b8d8c4;height:0"></span> <span>P3 / P97 bounds</span></div>
      ${babyData.length ? `<div class="legend-item"><span class="legend-dot" style="background:#c4786a"></span> <span>${profile.name}'s data</span></div>` : ''}
    `;
  }
}

function renderTable(profile) {
  const container = document.getElementById('tableArea');
  const ms = profile.measurements;
  if (!ms.length) {
    container.innerHTML = '<div class="no-data" style="padding:30px"><div class="icon">📋</div><p>No measurements yet. Add your first one!</p></div>';
    return;
  }

  const rows = ms.map((m, origIdx) => {
    const ageM = getAgeMonths(profile.dob, m.date);
    const wInfo = m.weight ? getPercentileInfo(m.weight, ageM, 'weight', profile.gender) : null;
    const hInfo = m.height ? getPercentileInfo(m.height, ageM, 'height', profile.gender) : null;
    const hcInfo = m.headCirc ? getPercentileInfo(m.headCirc, ageM, 'head', profile.gender) : null;

    const pBadge = (info) => {
      if (!info || info.pct == null) return '<span style="color:#b0a89e">—</span>';
      let cls = '';
      if (info.pct < 3 || info.pct > 97) cls = 'concern';
      else if (info.pct < 10 || info.pct > 90) cls = 'low';
      else if (info.pct >= 25 && info.pct <= 75) cls = 'high';
      return `<span class="pct-badge ${cls}" title="Z-score: ${info.z}">${info.label}</span>`;
    };

    const weightLbs = m.weight ? (m.weight/453.592).toFixed(1) : null;
    const heightIn  = m.height ? (m.height/2.54).toFixed(1) : null;

    return {
      origIdx,
      html: `<tr>
        <td>${formatDate(m.date)}</td>
        <td>${formatAge(ageM)}</td>
        <td>${m.weight != null ? `${m.weight}g<span class="metric-secondary">${weightLbs} lbs</span>` : '—'}</td>
        <td>${pBadge(wInfo)}</td>
        <td>${m.height != null ? `${m.height}cm<span class="metric-secondary">${heightIn}&quot;</span>` : '—'}</td>
        <td>${pBadge(hInfo)}</td>
        <td>${m.headCirc != null ? `${m.headCirc}cm` : '—'}</td>
        <td>${pBadge(hcInfo)}</td>
        <td>${m.notes || '—'}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteMeasurement(${origIdx})">✕</button></td>
      </tr>`
    };
  })
  .reverse()
  .map(r => r.html)
  .join('');

  container.innerHTML = `<div style="overflow-x:auto"><table class="dtable">
    <thead><tr>
      <th>Date</th><th>Age</th>
      <th>Weight</th><th>W%</th>
      <th>Length</th><th>L%</th>
      <th>Head Circ.</th><th>HC%</th>
      <th>Notes</th><th></th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

function deleteMeasurement(origIdx) {
  const profile = getCurrentProfile();
  if (!profile) return;
  if (!confirm('Delete this measurement?')) return;
  profile.measurements.splice(origIdx, 1);
  saveProfiles();
  renderAll();
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.chart-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-'+tab).classList.add('active');
  document.querySelectorAll('.chart-tab').forEach(t => {
    const txt = t.textContent.toLowerCase();
    if ((tab==='weight' && txt.includes('weight')) ||
        (tab==='height' && txt.includes('length')) ||
        (tab==='head'   && txt.includes('head'))) {
      t.classList.add('active');
    }
  });
}

function buildExportRows(profile) {
  const std = document.getElementById('refStandard')?.value || 'WHO';
  return profile.measurements.map(m => {
    const ageM = +getAgeMonths(profile.dob, m.date).toFixed(2);
    const wInfo = m.weight ? getPercentileInfo(m.weight, ageM, 'weight', profile.gender) : null;
    const hInfo = m.height ? getPercentileInfo(m.height, ageM, 'height', profile.gender) : null;
    const hcInfo = m.headCirc ? getPercentileInfo(m.headCirc, ageM, 'head', profile.gender) : null;
    return {
      date: m.date,
      ageMonths: ageM,
      ageFormatted: formatAge(ageM),
      weightG: m.weight ?? '',
      weightKg: m.weight ? +(m.weight/1000).toFixed(3) : '',
      weightLbs: m.weight ? +(m.weight/453.592).toFixed(2) : '',
      weightPct: wInfo?.label ?? '',
      weightZ: wInfo?.z ?? '',
      heightCm: m.height ?? '',
      heightIn: m.height ? +(m.height/2.54).toFixed(1) : '',
      heightPct: hInfo?.label ?? '',
      heightZ: hInfo?.z ?? '',
      headCircCm: m.headCirc ?? '',
      headCircPct: hcInfo?.label ?? '',
      headCircZ: hcInfo?.z ?? '',
      standard: std,
      notes: m.notes ?? ''
    };
  });
}

async function exportCSV() {
  const profile = getCurrentProfile();
  if (!profile || !profile.measurements.length) { alert('No data to export.'); return; }
  const rows = buildExportRows(profile);
  const headers = ['Date','Age (months)','Age','Weight (g)','Weight (kg)','Weight (lbs)','Weight %ile','Weight Z',
                   'Length (cm)','Length (in)','Length %ile','Length Z',
                   'Head Circ (cm)','Head Circ %ile','Head Circ Z','Standard','Notes'];
  const csvRows = rows.map(r => [
    r.date, r.ageMonths, r.ageFormatted,
    r.weightG, r.weightKg, r.weightLbs, r.weightPct, r.weightZ,
    r.heightCm, r.heightIn, r.heightPct, r.heightZ,
    r.headCircCm, r.headCircPct, r.headCircZ,
    r.standard, `"${String(r.notes).replace(/"/g,'""')}"`
  ].join(','));
  const content = [headers.join(','), ...csvRows].join('\n');
  const fname = `${profile.name}_growth_${getLocalYYYYMMDD()}.csv`;
  const saved = await writeToFolder('exports', fname, content);
  if (!saved) downloadBlob(fname, content, 'text/csv');
  else showImportStatus(`Exported: exports/${fname}`, 'success');
}

async function exportJSON() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const data = {
    baby: { name: profile.name, dob: profile.dob, gender: profile.gender },
    exportDate: new Date().toISOString(),
    standard: document.getElementById('refStandard')?.value || 'WHO',
    measurements: buildExportRows(profile)
  };
  const content = JSON.stringify(data, null, 2);
  const fname = `${profile.name}_growth_${getLocalYYYYMMDD()}.json`;
  const saved = await writeToFolder('exports', fname, content);
  if (!saved) downloadBlob(fname, content, 'application/json');
  else showImportStatus(`Exported: exports/${fname}`, 'success');
}

async function exportXLSX() {
  if (typeof XLSX === 'undefined') { alert('SheetJS library not loaded.'); return; }
  const profile = getCurrentProfile();
  if (!profile || !profile.measurements.length) { alert('No data to export.'); return; }
  const rows = buildExportRows(profile);
  const headers = ['Date','Age (months)','Age','Weight (g)','Weight (kg)','Weight (lbs)','Weight %ile','Weight Z',
                   'Length (cm)','Length (in)','Length %ile','Length Z',
                   'Head Circ (cm)','Head Circ %ile','Head Circ Z','Standard','Notes'];
  const sheetData = [
    headers,
    ...rows.map(r => [r.date,r.ageMonths,r.ageFormatted,r.weightG,r.weightKg,r.weightLbs,
      r.weightPct,r.weightZ,r.heightCm,r.heightIn,r.heightPct,r.heightZ,
      r.headCircCm,r.headCircPct,r.headCircZ,r.standard,r.notes])
  ];
  const ws = XLSX.utils.aoa_to_sheet(sheetData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, profile.name);
  const fname = `${profile.name}_growth_${getLocalYYYYMMDD()}.xlsx`;
  XLSX.writeFile(wb, fname);
  if (rootDirHandle) showImportStatus(`XLSX downloaded (binary files go to your downloads folder)`, 'info');
}

function printView() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const rows = buildExportRows(profile).map(r => `<tr>
    <td>${formatDate(r.date)}</td><td>${r.ageFormatted}</td>
    <td>${r.weightG ? r.weightG+'g' : '—'}</td><td>${r.weightPct}</td>
    <td>${r.heightCm ? r.heightCm+'cm' : '—'}</td><td>${r.heightPct}</td>
    <td>${r.headCircCm ? r.headCircCm+'cm' : '—'}</td><td>${r.headCircPct}</td>
    <td>${r.notes}</td>
  </tr>`).join('');
  const w = window.open('','_blank');
  w.document.write(`<html><head><title>${profile.name} Growth Chart</title>
  <style>body{font-family:sans-serif;padding:20px}table{border-collapse:collapse;width:100%}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;font-size:12px}
  th{background:#f0f0f0}h1{font-size:18px}p{font-size:12px;color:#666;margin:4px 0}</style></head>
  <body><h1>👶 ${profile.name} — Growth Chart</h1>
  <p>Born: ${formatDate(profile.dob)} | ${profile.gender} | Standard: ${document.getElementById('refStandard')?.value||'WHO'} | Printed: ${formatDate(getLocalYYYYMMDD())}</p>
  <table><thead><tr><th>Date</th><th>Age</th><th>Weight</th><th>W%</th><th>Length</th><th>L%</th><th>Head</th><th>HC%</th><th>Notes</th></tr></thead>
  <tbody>${rows}</tbody></table></body></html>`);
  w.print();
}

function today() { return getLocalYYYYMMDD(); }

function downloadBlob(filename, content, mimeType) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: mimeType }));
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

function showImportStatus(msg, type='info') {
  const el = document.getElementById('importStatus');
  el.textContent = msg;
  el.className = `import-status ${type}`;
  el.style.display = 'block';
  if (type === 'success') setTimeout(() => el.style.display = 'none', 4000);
}

async function importDataFile(input) {
  const file = input.files[0];
  if (!file) return;
  const profile = getCurrentProfile();
  if (!profile) { alert('Please select a baby profile first.'); input.value=''; return; }

  showImportStatus('Reading file…', 'info');

  try {
    const ext = file.name.split('.').pop().toLowerCase();
    let rows = [];

    if (ext === 'json') {
      rows = await parseJSON(file);
    } else if (ext === 'csv' || ext === 'txt' || ext === 'tsv') {
      const text = await file.text();
      rows = parseCSVText(text, ext === 'tsv' ? '\t' : autoDetectDelimiter(text));
    } else if (ext === 'xlsx' || ext === 'xls') {
      rows = await parseXLSX(file);
    } else {
      showImportStatus(`Unsupported file type: .${ext}`, 'error');
      input.value = ''; return;
    }

    if (!rows.length) { showImportStatus('No valid rows found in file.', 'error'); input.value=''; return; }

    pendingImportData = rows;
    showImportPreview(rows, profile.name, file.name);
  } catch(e) {
    showImportStatus(`Error reading file: ${e.message}`, 'error');
  }
  input.value = '';
}

function autoDetectDelimiter(text) {
  const firstLine = text.split('\n')[0];
  if ((firstLine.match(/,/g)||[]).length > (firstLine.match(/;/g)||[]).length) return ',';
  if ((firstLine.match(/;/g)||[]).length > (firstLine.match(/\t/g)||[]).length) return ';';
  if ((firstLine.match(/\t/g)||[]).length > 0) return '\t';
  return ',';
}

async function parseJSON(file) {
  const text = await file.text();
  const data = JSON.parse(text);
  const arr = Array.isArray(data) ? data : (data.measurements || []);
  return arr.map(normalizeImportRow).filter(Boolean);
}

async function parseXLSX(file) {
  if (typeof XLSX === 'undefined') throw new Error('SheetJS library not loaded');
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array', cellDates: true });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
  return json.map(normalizeImportRow).filter(Boolean);
}

function parseCSVText(text, delimiter=',') {
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split(delimiter).map(h => h.replace(/"/g,'').trim().toLowerCase());
  return lines.slice(1).map(line => {
    const vals = splitCSVLine(line, delimiter);
    const obj = {};
    headers.forEach((h,i) => obj[h] = (vals[i]||'').replace(/"/g,'').trim());
    return normalizeImportRow(obj);
  }).filter(Boolean);
}

function splitCSVLine(line, delimiter) {
  const result = []; let cur = ''; let inQ = false;
  for (let i=0;i<line.length;i++) {
    if (line[i]==='"') { inQ=!inQ; continue; }
    if (line[i]===delimiter && !inQ) { result.push(cur); cur=''; continue; }
    cur += line[i];
  }
  result.push(cur);
  return result;
}

function normalizeImportRow(row) {
  const dateRaw = row.date || row.Date || row['measurement date'] || row['Measurement Date'] || row.measured || '';
  if (!dateRaw) return null;
  const date = parseImportDate(String(dateRaw));
  if (!date) return null;

  let weightG = null;
  const wRaw = row.weight || row.Weight || row['weight (g)'] || row['Weight (g)'] || row['weight(g)'] || '';
  const wKg  = row['weight (kg)'] || row['Weight (kg)'] || row['weight_kg'] || '';
  const wLbs = row['weight (lbs)'] || row['Weight (lbs)'] || row['weight_lbs'] || '';
  if (wRaw !== '' && wRaw !== null) {
    const v = parseFloat(wRaw);
    if (!isNaN(v)) weightG = v < 30 ? Math.round(v*1000) : Math.round(v);
  } else if (wKg !== '' && wKg !== null) {
    const v = parseFloat(wKg);
    if (!isNaN(v) && v > 0) weightG = Math.round(v*1000);
  } else if (wLbs !== '' && wLbs !== null) {
    const v = parseFloat(wLbs);
    if (!isNaN(v) && v > 0) weightG = Math.round(v*453.592);
  }

  const hRaw = row.height || row.Height || row.length || row.Length || row['height (cm)'] || row['Height (cm)'] || row['length (cm)'] || '';
  const hIn  = row['height (in)'] || row['length (in)'] || row['Height (in)'] || '';
  let height = null;
  if (hRaw !== '' && hRaw !== null) {
    const v = parseFloat(hRaw); if (!isNaN(v) && v > 0) height = v;
  } else if (hIn !== '' && hIn !== null) {
    const v = parseFloat(hIn); if (!isNaN(v) && v > 0) height = +(v*2.54).toFixed(1);
  }

  const hcKeys = ['headcirc','head circ','head circumference','headcircumference','head_circ','hc',
                  'head circ (cm)','head circumference (cm)','headcirc (cm)'];
  let headCirc = null;
  for (const k of hcKeys) {
    const v = parseFloat(row[k] || row[k.charAt(0).toUpperCase()+k.slice(1)] || '');
    if (!isNaN(v) && v > 0) { headCirc = v; break; }
  }

  const notes = row.notes || row.Notes || row.note || row.Note || '';

  if (!weightG && !height && !headCirc) return null;
  return { date, weight: weightG, height, headCirc, notes: String(notes) };
}

function parseImportDate(raw) {
  if (!raw) return null;
  const cleaned = raw.trim();
  let d = new Date(cleaned);
  if (!isNaN(d)) {
    return getLocalYYYYMMDD(d);
  }
  const dmyMatch = cleaned.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
  if (dmyMatch) {
    d = new Date(parseInt(dmyMatch[3], 10), parseInt(dmyMatch[2], 10)-1, parseInt(dmyMatch[1], 10));
    if (!isNaN(d)) return getLocalYYYYMMDD(d);
  }
  return null;
}

function showImportPreview(rows, profileName, filename) {
  document.getElementById('importPreviewInfo').textContent =
    `Found ${rows.length} row${rows.length!==1?'s':''} in "${filename}" — importing into ${profileName}`;

  const preview = rows.slice(0, 10);
  const tableHTML = `<table class="preview-table">
    <thead><tr><th>Date</th><th>Weight (g)</th><th>Length (cm)</th><th>Head Circ (cm)</th><th>Notes</th></tr></thead>
    <tbody>
      ${preview.map(r => `<tr>
        <td>${formatDate(r.date)}</td>
        <td>${r.weight ?? '—'}</td>
        <td>${r.height ?? '—'}</td>
        <td>${r.headCirc ?? '—'}</td>
        <td>${r.notes || '—'}</td>
      </tr>`).join('')}
      ${rows.length > 10 ? `<tr><td colspan="5" style="text-align:center;color:#7a736c;font-size:11px">…and ${rows.length-10} more rows</td></tr>` : ''}
    </tbody>
  </table>`;

  document.getElementById('importPreviewTable').innerHTML = tableHTML;
  document.getElementById('importPreviewModal').classList.add('open');
}

function confirmImport() {
  const profile = getCurrentProfile();
  if (!profile) { closeModal('importPreviewModal'); return; }

  let added = 0, skipped = 0;
  pendingImportData.forEach(row => {
    const dupe = profile.measurements.some(m =>
      m.date === row.date && m.weight === row.weight &&
      m.height === row.height && m.headCirc === row.headCirc
    );
    if (dupe) { skipped++; return; }
    profile.measurements.push(row);
    added++;
  });

  profile.measurements.sort((a,b) => parseDateStrict(a.date).getTime() - parseDateStrict(b.date).getTime());
  pendingImportData = [];
  saveProfiles();
  closeModal('importPreviewModal');
  renderAll();
  showImportStatus(`Imported ${added} measurement${added!==1?'s':''}.${skipped?' ('+skipped+' duplicates skipped)':''}`, 'success');
}
