const supabaseUrl = 'https://pzcwjmqhnqrzpbactcq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6Y3dqbXFobmlxcnpwYmFjdGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNzQ0NzUsImV4cCI6MjA2NTc1MDQ3NX0.5gvJdiHFmRZCChQKxCrsJu_cDjGMJlEHIzSU_Y2bvyo' // Ersetze das mit deinem Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey)

async function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error, session } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    alert('Fehler beim Login: ' + error.message)
  } else {
    alert('Login erfolgreich!')
    // Hier kannst du z.B. weiterleiten zur Dashboard-Seite
  }
}