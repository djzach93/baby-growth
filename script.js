// ─── WHO Reference Data (P3, P15, P50, P85, P97) ───────────────────────────
// Format: { month: [p3, p15, p50, p85, p97] }
const WHO = {
  weight: {
    boys: {
      0:[2.5,2.9,3.3,3.9,4.4], 1:[3.4,3.9,4.5,5.1,5.7], 2:[4.3,4.9,5.6,6.3,7.1],
      3:[5.0,5.7,6.4,7.2,8.0], 4:[5.6,6.2,7.0,7.8,8.7], 5:[6.0,6.7,7.5,8.4,9.3],
      6:[6.4,7.1,7.9,8.8,9.8], 7:[6.7,7.4,8.3,9.2,10.3], 8:[6.9,7.7,8.6,9.6,10.7],
      9:[7.1,7.9,8.9,9.9,11.0], 10:[7.4,8.2,9.2,10.2,11.4], 11:[7.6,8.4,9.4,10.5,11.7],
      12:[7.7,8.6,9.6,10.8,12.0], 15:[8.3,9.2,10.3,11.5,12.8], 18:[8.8,9.8,10.9,12.2,13.7],
      21:[9.2,10.2,11.5,12.8,14.5], 24:[9.7,10.8,12.2,13.6,15.3]
    },
    girls: {
      0:[2.4,2.8,3.2,3.7,4.2], 1:[3.2,3.6,4.2,4.8,5.5], 2:[3.9,4.5,5.1,5.8,6.6],
      3:[4.5,5.2,5.8,6.6,7.5], 4:[5.0,5.7,6.4,7.3,8.2], 5:[5.4,6.1,6.9,7.8,8.8],
      6:[5.7,6.5,7.3,8.2,9.3], 7:[6.0,6.8,7.6,8.6,9.7], 8:[6.3,7.0,7.9,9.0,10.2],
      9:[6.5,7.3,8.2,9.3,10.5], 10:[6.7,7.5,8.5,9.6,10.9], 11:[6.9,7.7,8.7,9.9,11.2],
      12:[7.0,7.9,8.9,10.1,11.5], 15:[7.6,8.5,9.6,10.9,12.4], 18:[8.1,9.1,10.2,11.6,13.2],
      21:[8.6,9.6,10.9,12.3,14.0], 24:[9.0,10.2,11.5,13.0,14.8]
    }
  },
  height: {
    boys: {
      0:[46.1,47.9,49.9,51.8,53.7], 1:[50.8,52.8,54.7,56.7,58.6], 2:[54.4,56.4,58.4,60.4,62.4],
      3:[57.3,59.4,61.4,63.5,65.5], 4:[59.7,61.8,63.9,66.0,68.0], 5:[61.7,63.8,65.9,68.0,70.1],
      6:[63.3,65.5,67.6,69.8,71.9], 7:[64.8,67.0,69.2,71.3,73.5], 8:[66.2,68.4,70.6,72.8,75.0],
      9:[67.5,69.7,72.0,74.2,76.5], 10:[68.7,71.0,73.3,75.6,77.9], 11:[69.9,72.2,74.5,76.9,79.2],
      12:[71.0,73.4,75.7,78.1,80.5], 15:[74.1,76.6,79.1,81.7,84.2], 18:[76.9,79.6,82.3,85.0,87.7],
      21:[79.4,82.3,85.1,88.0,90.9], 24:[81.7,84.8,87.8,90.9,93.9]
    },
    girls: {
      0:[45.4,47.3,49.1,51.0,52.9], 1:[49.8,51.7,53.7,55.6,57.6], 2:[53.0,55.0,57.1,59.1,61.1],
      3:[55.6,57.7,59.8,61.9,64.0], 4:[57.8,59.9,62.1,64.3,66.4], 5:[59.6,61.8,64.0,66.2,68.5],
      6:[61.2,63.5,65.7,68.0,70.3], 7:[62.7,65.0,67.3,69.6,71.9], 8:[64.0,66.4,68.7,71.1,73.5],
      9:[65.3,67.7,70.1,72.6,75.0], 10:[66.5,69.0,71.5,73.9,76.4], 11:[67.7,70.2,72.8,75.3,77.8],
      12:[68.9,71.4,74.0,76.6,79.2], 15:[72.0,74.8,77.5,80.3,83.0], 18:[74.9,77.8,80.7,83.6,86.5],
      21:[77.5,80.5,83.7,86.7,89.8], 24:[80.0,83.3,86.4,89.6,92.9]
    }
  },
  head: {
    boys: {
      0:[31.7,32.9,34.5,36.0,37.3], 1:[34.9,36.1,37.3,38.4,39.4], 2:[36.8,38.0,39.1,40.2,41.2],
      3:[38.1,39.3,40.5,41.7,42.7], 4:[39.2,40.4,41.6,42.8,43.9], 5:[40.1,41.3,42.6,43.8,44.9],
      6:[40.9,42.2,43.3,44.6,45.6], 7:[41.5,42.7,44.0,45.1,46.3], 8:[42.1,43.3,44.5,45.7,46.9],
      9:[42.5,43.8,45.0,46.2,47.4], 10:[43.0,44.2,45.4,46.6,47.8], 11:[43.4,44.6,45.8,47.0,48.3],
      12:[43.7,44.9,46.1,47.4,48.6], 15:[44.4,45.7,46.9,48.2,49.5], 18:[45.1,46.3,47.6,48.9,50.2],
      21:[45.6,46.9,48.2,49.5,50.8], 24:[46.0,47.3,48.6,50.0,51.3]
    },
    girls: {
      0:[31.0,32.1,33.9,35.1,36.2], 1:[33.9,35.1,36.5,37.7,38.8], 2:[35.6,36.8,38.3,39.5,40.6],
      3:[36.9,38.1,39.5,40.7,41.9], 4:[37.9,39.2,40.6,41.9,43.1], 5:[38.8,40.1,41.5,42.8,44.0],
      6:[39.6,40.9,42.2,43.5,44.8], 7:[40.2,41.5,42.9,44.3,45.5], 8:[40.7,42.1,43.5,44.8,46.1],
      9:[41.2,42.6,44.0,45.3,46.6], 10:[41.7,43.0,44.4,45.8,47.1], 11:[42.1,43.5,44.9,46.2,47.5],
      12:[42.4,43.8,45.2,46.6,47.9], 15:[43.2,44.7,46.1,47.5,48.9], 18:[43.9,45.3,46.8,48.2,49.6],
      21:[44.5,45.9,47.3,48.8,50.2], 24:[44.9,46.4,47.8,49.3,50.7]
    }
  }
};

// CDC data approximated (similar structure, slightly different values for 0-24mo)
const CDC = {
  weight: {
    boys: {
      0:[2.5,2.9,3.4,3.9,4.5], 1:[3.5,4.0,4.6,5.2,5.8], 2:[4.4,5.0,5.7,6.4,7.2],
      3:[5.1,5.8,6.5,7.3,8.2], 4:[5.6,6.4,7.1,8.0,9.0], 5:[6.1,6.9,7.7,8.6,9.7],
      6:[6.4,7.2,8.1,9.1,10.2], 7:[6.7,7.6,8.5,9.5,10.7], 8:[7.0,7.9,8.9,9.9,11.1],
      9:[7.2,8.1,9.1,10.2,11.5], 10:[7.5,8.4,9.4,10.5,11.8], 11:[7.7,8.6,9.7,10.8,12.2],
      12:[7.8,8.8,9.9,11.1,12.5], 15:[8.4,9.5,10.7,12.0,13.5], 18:[8.9,10.0,11.3,12.7,14.3],
      21:[9.4,10.5,11.9,13.3,15.0], 24:[9.8,11.0,12.4,13.9,15.7]
    },
    girls: {
      0:[2.4,2.7,3.2,3.7,4.2], 1:[3.1,3.5,4.1,4.7,5.4], 2:[3.9,4.4,5.0,5.7,6.5],
      3:[4.4,5.1,5.7,6.5,7.5], 4:[4.9,5.6,6.3,7.2,8.2], 5:[5.3,6.1,6.9,7.8,8.9],
      6:[5.7,6.4,7.3,8.3,9.5], 7:[5.9,6.7,7.6,8.7,9.9], 8:[6.2,7.0,8.0,9.1,10.4],
      9:[6.4,7.2,8.3,9.5,10.8], 10:[6.6,7.5,8.5,9.7,11.1], 11:[6.8,7.7,8.8,10.0,11.5],
      12:[7.0,8.0,9.1,10.4,11.9], 15:[7.6,8.6,9.8,11.2,12.8], 18:[8.1,9.2,10.5,11.9,13.6],
      21:[8.6,9.7,11.0,12.6,14.4], 24:[9.0,10.2,11.5,13.2,15.1]
    }
  },
  height: {
    boys: {
      0:[46.3,48.1,50.0,52.0,53.9], 1:[51.0,53.0,55.0,57.1,59.1], 2:[54.5,56.6,58.7,60.7,62.9],
      3:[57.5,59.6,61.7,63.9,66.0], 4:[59.9,62.1,64.3,66.4,68.6], 5:[61.9,64.1,66.4,68.6,70.9],
      6:[63.5,65.8,68.1,70.4,72.7], 7:[65.0,67.3,69.7,72.0,74.4], 8:[66.4,68.7,71.1,73.5,75.9],
      9:[67.7,70.1,72.5,74.9,77.3], 10:[68.9,71.4,73.8,76.3,78.7], 11:[70.1,72.6,75.1,77.6,80.1],
      12:[71.2,73.8,76.3,78.9,81.4], 15:[74.3,77.0,79.6,82.3,85.0], 18:[77.1,79.9,82.7,85.5,88.3],
      21:[79.6,82.5,85.5,88.4,91.3], 24:[81.9,84.9,88.0,91.0,94.1]
    },
    girls: {
      0:[45.5,47.4,49.2,51.1,53.0], 1:[49.9,51.8,53.8,55.7,57.7], 2:[53.0,55.1,57.2,59.2,61.3],
      3:[55.7,57.9,60.0,62.1,64.3], 4:[57.9,60.2,62.4,64.6,66.9], 5:[59.7,62.1,64.4,66.7,69.1],
      6:[61.3,63.8,66.1,68.5,70.9], 7:[62.8,65.3,67.7,70.1,72.5], 8:[64.2,66.7,69.2,71.7,74.2],
      9:[65.5,68.1,70.6,73.2,75.7], 10:[66.8,69.4,71.9,74.5,77.1], 11:[68.0,70.7,73.3,75.9,78.5],
      12:[69.2,71.9,74.6,77.2,79.9], 15:[72.4,75.3,78.1,81.0,83.9], 18:[75.2,78.2,81.2,84.2,87.1],
      21:[77.9,81.0,84.2,87.3,90.4], 24:[80.3,83.6,86.8,90.1,93.4]
    }
  },
  head: { boys: WHO.head.boys, girls: WHO.head.girls }
};

// ─── State ────────────────────────────────────────────────────────────────────
let profiles = JSON.parse(localStorage.getItem('babyProfiles') || '[]');
let currentProfileId = localStorage.getItem('currentProfileId') || null;
let charts = {};
let activeTab = 'weight';

function saveProfiles() {
  localStorage.setItem('babyProfiles', JSON.stringify(profiles));
  localStorage.setItem('currentProfileId', currentProfileId || '');
}

function getCurrentProfile() {
  return profiles.find(p => p.id === currentProfileId);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
window.onload = function() {
  // Set today's date
  document.getElementById('measDate').valueAsDate = new Date();
  renderProfileSelect();
  if (currentProfileId && profiles.find(p => p.id === currentProfileId)) {
    renderAll();
  }
};

// ─── Profile Management ───────────────────────────────────────────────────────
function openAddProfileModal() {
  document.getElementById('addProfileModal').classList.add('open');
  document.getElementById('newDob').valueAsDate = new Date(Date.now() - 30*24*60*60*1000);
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function saveProfile() {
  const name = document.getElementById('newName').value.trim();
  const dob = document.getElementById('newDob').value;
  const gender = document.getElementById('newGender').value;
  if (!name || !dob) { alert('Please enter a name and date of birth.'); return; }

  const bw = parseFloat(document.getElementById('newBirthWeight').value) || null;
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

  document.getElementById('newName').value = '';
  document.getElementById('newBirthWeight').value = '';
  document.getElementById('newBirthLength').value = '';
  document.getElementById('newBirthHC').value = '';
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
  if (id) renderAll(); else {
    document.getElementById('profileInfo').innerHTML = '<div class="no-data"><div class="icon">🌱</div><p>Select or add a baby profile.</p></div>';
    document.getElementById('entryForm').style.display = 'none';
    document.getElementById('dashboardArea').style.display = 'none';
    document.getElementById('noProfileMsg').style.display = 'block';
  }
}

// ─── Age Calculation ──────────────────────────────────────────────────────────
function getAgeMonths(dobStr, measDateStr) {
  const dob = new Date(dobStr), meas = new Date(measDateStr);
  const diff = meas - dob;
  return Math.max(0, diff / (1000 * 60 * 60 * 24 * 30.4375));
}

function formatAge(months) {
  if (months < 1) return `${Math.round(months * 30)} days`;
  if (months < 24) {
    const m = Math.floor(months), w = Math.floor((months - m) * 4.33);
    return m > 0 ? `${m}m ${w > 0 ? w+'w' : ''}`.trim() : `${w}w`;
  }
  const y = Math.floor(months / 12), m = Math.floor(months % 12);
  return m > 0 ? `${y}y ${m}m` : `${y}y`;
}

// ─── Percentile Interpolation ─────────────────────────────────────────────────
function getWHORef(type, gender, ageMonths) {
  const ref = getCurrentRef()[type][gender === 'male' ? 'boys' : 'girls'];
  const keys = Object.keys(ref).map(Number).sort((a,b)=>a-b);
  if (ageMonths <= keys[0]) return ref[keys[0]];
  if (ageMonths >= keys[keys.length-1]) return ref[keys[keys.length-1]];
  let lo = keys[0], hi = keys[1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (ageMonths >= keys[i] && ageMonths <= keys[i+1]) { lo = keys[i]; hi = keys[i+1]; break; }
  }
  const t = (ageMonths - lo) / (hi - lo);
  return ref[lo].map((v,i) => +(v + t*(ref[hi][i]-v)).toFixed(2));
}

function getPercentile(value, ageMonths, type, gender) {
  const pcts = [3,15,50,85,97];
  const ref = getWHORef(type, gender, ageMonths);
  if (value <= ref[0]) return '<3';
  if (value >= ref[4]) return '>97';
  for (let i = 0; i < 4; i++) {
    if (value >= ref[i] && value <= ref[i+1]) {
      const t = (value - ref[i]) / (ref[i+1] - ref[i]);
      return Math.round(pcts[i] + t*(pcts[i+1]-pcts[i]));
    }
  }
  return '—';
}

function getCurrentRef() {
  const std = document.getElementById('refStandard')?.value || 'WHO';
  return std === 'CDC' ? CDC : WHO;
}

// ─── Unit Sync ────────────────────────────────────────────────────────────────
document.getElementById && setInterval(() => {
  const kg = document.getElementById('weight');
  if (kg && document.activeElement !== kg) {
    const lbs = document.getElementById('weightLbs');
    if (lbs && document.activeElement === lbs) return;
    if (kg.value) document.getElementById('weightLbs').value = +(parseFloat(kg.value)*2.20462).toFixed(2);
  }
}, 300);

function syncWeightLbsToKg() {
  const v = parseFloat(document.getElementById('weightLbs').value);
  if (!isNaN(v)) document.getElementById('weight').value = +(v/2.20462).toFixed(3);
}
function syncHeightInToCm() {
  const v = parseFloat(document.getElementById('heightIn').value);
  if (!isNaN(v)) document.getElementById('height').value = +(v*2.54).toFixed(1);
}
function syncHeadInToCm() {
  const v = parseFloat(document.getElementById('headCircIn').value);
  if (!isNaN(v)) document.getElementById('headCirc').value = +(v*2.54).toFixed(1);
}

// ─── Add Measurement ──────────────────────────────────────────────────────────
function addMeasurement() {
  const profile = getCurrentProfile();
  if (!profile) { alert('Please select a baby profile first.'); return; }

  const date = document.getElementById('measDate').value;
  const weight = parseFloat(document.getElementById('weight').value) || null;
  const height = parseFloat(document.getElementById('height').value) || null;
  const headCirc = parseFloat(document.getElementById('headCirc').value) || null;
  const notes = document.getElementById('notes').value.trim();

  if (!date) { alert('Please enter a measurement date.'); return; }
  if (!weight && !height && !headCirc) { alert('Please enter at least one measurement.'); return; }

  profile.measurements.push({ date, weight, height, headCirc, notes });
  profile.measurements.sort((a,b) => new Date(a.date)-new Date(b.date));
  saveProfiles();
  renderAll();

  document.getElementById('weight').value = '';
  document.getElementById('weightLbs').value = '';
  document.getElementById('height').value = '';
  document.getElementById('heightIn').value = '';
  document.getElementById('headCirc').value = '';
  document.getElementById('headCircIn').value = '';
  document.getElementById('notes').value = '';
}

// ─── Render All ───────────────────────────────────────────────────────────────
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
}

function renderProfileCard(p) {
  const ageMonths = getAgeMonths(p.dob, new Date().toISOString().split('T')[0]);
  const gIcon = p.gender === 'male' ? '👦' : '👧';
  const dob = new Date(p.dob).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' });
  document.getElementById('profileInfo').innerHTML = `
    <div class="profile-card">
      <div class="baby-name">${gIcon} ${p.name}</div>
      <div class="baby-meta">Born ${dob}</div>
      <div class="baby-meta">${p.gender.charAt(0).toUpperCase()+p.gender.slice(1)} &middot; ${p.measurements.length} measurement${p.measurements.length !== 1 ? 's' : ''}</div>
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

  const wPct = last.weight ? getPercentile(last.weight, ageM, 'weight', p.gender) : '—';
  const hPct = last.height ? getPercentile(last.height, ageM, 'height', p.gender) : '—';
  const hcPct = last.headCirc ? getPercentile(last.headCirc, ageM, 'head', p.gender) : '—';

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card highlight">
      <div class="stat-label">Weight</div>
      <div class="stat-value">${last.weight ? last.weight+'kg' : '—'}</div>
      <div class="stat-sub">Percentile: ${wPct}${typeof wPct==='number'?'th':''}</div>
    </div>
    <div class="stat-card highlight">
      <div class="stat-label">Length</div>
      <div class="stat-value">${last.height ? last.height+'cm' : '—'}</div>
      <div class="stat-sub">Percentile: ${hPct}${typeof hPct==='number'?'th':''}</div>
    </div>
    <div class="stat-card highlight">
      <div class="stat-label">Head Circ.</div>
      <div class="stat-value">${last.headCirc ? last.headCirc+'cm' : '—'}</div>
      <div class="stat-sub">Percentile: ${hcPct}${typeof hcPct==='number'?'th':''}</div>
    </div>`;
}

// ─── Charts ───────────────────────────────────────────────────────────────────
const chartConfig = {
  weight: { label: 'Weight (kg)', unit: 'kg', key: 'weight' },
  height: { label: 'Length / Height (cm)', unit: 'cm', key: 'height' },
  head:   { label: 'Head Circumference (cm)', unit: 'cm', key: 'headCirc' }
};

function buildRefCurve(type, gender, months) {
  return months.map(m => {
    const ref = getWHORef(type, gender, m);
    return ref;
  });
}

function renderChart(type, profile) {
  const canvasId = { weight:'chartWeight', height:'chartHeight', head:'chartHead' }[type];
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (charts[type]) { charts[type].destroy(); delete charts[type]; }

  const cfg = chartConfig[type];
  const refType = { weight:'weight', height:'height', head:'head' }[type];
  const gender = profile.gender;

  // Reference months 0-24 monthly
  const refMonths = Array.from({length:25},(_,i)=>i);
  const refData = buildRefCurve(refType, gender, refMonths);

  const pctColors = ['#a8d8c0','#c8e8d8','#e0f4ec','#c8e8d8','#a8d8c0'];
  const pctLabels = ['3rd','15th','50th','85th','97th'];

  const datasets = [
    {
      label:'P97', data: refData.map((r,i)=>({x:refMonths[i],y:r[4]})),
      borderColor:'#b8d8c4', borderWidth:1, borderDash:[4,2],
      pointRadius:0, fill:false, tension:0.4
    },
    {
      label:'P85', data: refData.map((r,i)=>({x:refMonths[i],y:r[3]})),
      borderColor:'#88c4a4', borderWidth:1,
      pointRadius:0, fill:'+1', backgroundColor:'rgba(168,216,192,0.15)', tension:0.4
    },
    {
      label:'P50', data: refData.map((r,i)=>({x:refMonths[i],y:r[2]})),
      borderColor:'#5a7d6b', borderWidth:2,
      pointRadius:0, fill:false, tension:0.4
    },
    {
      label:'P15', data: refData.map((r,i)=>({x:refMonths[i],y:r[1]})),
      borderColor:'#88c4a4', borderWidth:1,
      pointRadius:0, fill:'-1', backgroundColor:'rgba(168,216,192,0.15)', tension:0.4
    },
    {
      label:'P3', data: refData.map((r,i)=>({x:refMonths[i],y:r[0]})),
      borderColor:'#b8d8c4', borderWidth:1, borderDash:[4,2],
      pointRadius:0, fill:'+1', backgroundColor:'rgba(168,216,192,0.08)', tension:0.4
    }
  ];

  // Baby's actual data
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
      pointHoverRadius: 8,
      pointStyle: 'circle',
      tension: 0.4,
      fill: false,
      order: -1
    });
  }

  const std = document.getElementById('refStandard')?.value || 'WHO';
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
                const pct = getPercentile(ctx.parsed.y, ctx.parsed.x, refType, gender);
                return `${ctx.parsed.y.toFixed(1)} ${cfg.unit} (${pct}${typeof pct==='number'?'th':''} pct)`;
              }
              return `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)} ${cfg.unit}`;
            },
            title: ctx => `Age: ${formatAge(ctx[0].parsed.x)}`
          }
        }
      },
      scales: {
        x: {
          type: 'linear', min: 0, max: 24,
          title: { display: true, text: 'Age (months)', color: '#7a736c', font: { size: 12 } },
          ticks: {
            stepSize: 3,
            callback: v => v + 'm',
            color: '#7a736c'
          },
          grid: { color: 'rgba(0,0,0,0.05)' }
        },
        y: {
          title: { display: true, text: cfg.label, color: '#7a736c', font: { size: 12 } },
          ticks: { color: '#7a736c' },
          grid: { color: 'rgba(0,0,0,0.05)' }
        }
      }
    }
  });

  // Legend
  const legendId = { weight:'legend-weight', height:'legend-height', head:'legend-head' }[type];
  const legendEl = document.getElementById(legendId);
  if (legendEl) {
    legendEl.innerHTML = `
      <div class="legend-item"><span class="legend-line" style="background:#5a7d6b;height:2px"></span> <span>P50 (Median) – ${std}</span></div>
      <div class="legend-item"><span style="display:inline-block;width:20px;height:10px;background:rgba(168,216,192,0.4);border:1px solid #88c4a4;border-radius:2px"></span> <span>P15–P85 range</span></div>
      <div class="legend-item"><span class="legend-line" style="background:#b8d8c4;border-bottom:1px dashed #b8d8c4"></span> <span>P3 / P97 limits</span></div>
      ${babyData.length ? `<div class="legend-item"><span class="legend-dot" style="background:#c4786a"></span> <span>${profile.name}'s measurements</span></div>` : ''}
    `;
  }
}

// ─── Table ────────────────────────────────────────────────────────────────────
function renderTable(profile) {
  const container = document.getElementById('tableArea');
  const ms = profile.measurements;
  if (!ms.length) {
    container.innerHTML = '<div class="no-data" style="padding:30px"><div class="icon">📋</div><p>No measurements yet. Add your first one!</p></div>';
    return;
  }

  const rows = ms.map((m, idx) => {
    const ageM = getAgeMonths(profile.dob, m.date);
    const wPct = m.weight ? getPercentile(m.weight, ageM, 'weight', profile.gender) : '—';
    const hPct = m.height ? getPercentile(m.height, ageM, 'height', profile.gender) : '—';
    const hcPct = m.headCirc ? getPercentile(m.headCirc, ageM, 'head', profile.gender) : '—';
    const date = new Date(m.date).toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'numeric' });
    const pBadge = (p) => {
      if (p === '—') return '<span style="color:#b0a89e">—</span>';
      const cls = (p==='<3'||p<3)?'low':(p=='>97'||p>97)?'high':'';
      return `<span class="pct-badge ${cls}">${p}${typeof p==='number'?'th':''}</span>`;
    };
    return `<tr>
      <td>${date}</td>
      <td>${formatAge(ageM)}</td>
      <td>${m.weight ? m.weight+'kg<br><small style="color:#b0a89e">(${(m.weight*2.20462).toFixed(1)}lbs)</small>' : '—'}</td>
      <td>${pBadge(wPct)}</td>
      <td>${m.height ? m.height+'cm<br><small style="color:#b0a89e">(${(m.height/2.54).toFixed(1)}")</small>' : '—'}</td>
      <td>${pBadge(hPct)}</td>
      <td>${m.headCirc ? m.headCirc+'cm' : '—'}</td>
      <td>${pBadge(hcPct)}</td>
      <td>${m.notes || '—'}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteMeasurement(${idx})">✕</button></td>
    </tr>`;
  }).reverse().join('');

  container.innerHTML = `<div style="overflow-x:auto"><table class="dtable">
    <thead><tr>
      <th>Date</th><th>Age</th>
      <th>Weight</th><th>W Pct</th>
      <th>Length</th><th>L Pct</th>
      <th>Head Circ.</th><th>HC Pct</th>
      <th>Notes</th><th></th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

function deleteMeasurement(idx) {
  const profile = getCurrentProfile();
  if (!profile) return;
  const actualIdx = profile.measurements.length - 1 - idx;
  if (!confirm('Delete this measurement?')) return;
  profile.measurements.splice(actualIdx, 1);
  saveProfiles();
  renderAll();
}

// ─── Tab Switching ────────────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.chart-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-'+tab).classList.add('active');
  document.querySelectorAll('.chart-tab').forEach(t => {
    if (t.textContent.toLowerCase().includes(tab) ||
        (tab==='head' && t.textContent.includes('Head')) ||
        (tab==='height' && t.textContent.includes('Length')) ||
        (tab==='weight' && t.textContent.includes('Weight'))) {
      t.classList.add('active');
    }
  });
}

// ─── Export ───────────────────────────────────────────────────────────────────
function exportCSV() {
  const profile = getCurrentProfile();
  if (!profile || !profile.measurements.length) { alert('No data to export.'); return; }
  const headers = ['Date','Age (months)','Age (formatted)','Weight (kg)','Weight (lbs)','Weight Percentile','Length (cm)','Length (in)','Length Percentile','Head Circ (cm)','Head Circ Percentile','Notes'];
  const rows = profile.measurements.map(m => {
    const ageM = +getAgeMonths(profile.dob, m.date).toFixed(2);
    return [
      m.date, ageM, formatAge(ageM),
      m.weight || '', m.weight ? +(m.weight*2.20462).toFixed(2) : '',
      m.weight ? getPercentile(m.weight, ageM, 'weight', profile.gender) : '',
      m.height || '', m.height ? +(m.height/2.54).toFixed(1) : '',
      m.height ? getPercentile(m.height, ageM, 'height', profile.gender) : '',
      m.headCirc || '',
      m.headCirc ? getPercentile(m.headCirc, ageM, 'head', profile.gender) : '',
      m.notes ? '"'+m.notes.replace(/"/g,'""')+'"' : ''
    ].join(',');
  });
  const csv = [headers.join(','), ...rows].join('\n');
  downloadFile(`${profile.name}_growth_data.csv`, csv, 'text/csv');
}

function exportJSON() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const data = {
    baby: { name: profile.name, dob: profile.dob, gender: profile.gender },
    exportDate: new Date().toISOString(),
    standard: document.getElementById('refStandard')?.value || 'WHO',
    measurements: profile.measurements.map(m => {
      const ageM = +getAgeMonths(profile.dob, m.date).toFixed(2);
      return {
        ...m,
        ageMonths: ageM,
        ageFormatted: formatAge(ageM),
        percentiles: {
          weight: m.weight ? getPercentile(m.weight, ageM, 'weight', profile.gender) : null,
          height: m.height ? getPercentile(m.height, ageM, 'height', profile.gender) : null,
          headCirc: m.headCirc ? getPercentile(m.headCirc, ageM, 'head', profile.gender) : null
        }
      };
    })
  };
  downloadFile(`${profile.name}_growth_data.json`, JSON.stringify(data, null, 2), 'application/json');
}

function downloadFile(filename, content, mimeType) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: mimeType }));
  a.download = filename;
  a.click();
}

function printView() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const ms = profile.measurements;
  let rows = ms.map(m => {
    const ageM = +getAgeMonths(profile.dob, m.date).toFixed(2);
    return `<tr>
      <td>${new Date(m.date).toLocaleDateString()}</td>
      <td>${formatAge(ageM)}</td>
      <td>${m.weight ? m.weight+'kg' : '—'}</td>
      <td>${m.weight ? getPercentile(m.weight,ageM,'weight',profile.gender) : '—'}</td>
      <td>${m.height ? m.height+'cm' : '—'}</td>
      <td>${m.height ? getPercentile(m.height,ageM,'height',profile.gender) : '—'}</td>
      <td>${m.headCirc ? m.headCirc+'cm' : '—'}</td>
      <td>${m.headCirc ? getPercentile(m.headCirc,ageM,'head',profile.gender) : '—'}</td>
    </tr>`;
  }).join('');
  const w = window.open('','_blank');
  w.document.write(`<html><head><title>${profile.name} Growth Chart</title>
  <style>body{font-family:sans-serif;padding:20px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ccc;padding:6px 10px;text-align:left}th{background:#f0f0f0}h1{font-size:20px}p{font-size:13px;color:#555}</style></head>
  <body><h1>👶 ${profile.name} — Growth Chart</h1>
  <p>Born: ${new Date(profile.dob).toLocaleDateString()} | Gender: ${profile.gender} | Printed: ${new Date().toLocaleDateString()}</p>
  <table><thead><tr><th>Date</th><th>Age</th><th>Weight</th><th>W%</th><th>Length</th><th>L%</th><th>Head Circ.</th><th>HC%</th></tr></thead>
  <tbody>${rows}</tbody></table></body></html>`);
  w.print();
}