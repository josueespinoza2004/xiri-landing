/**
 * Capa de datos de la landing.
 *
 * Todas las peticiones se ejecutan en el SERVIDOR (Server Components), por lo
 * que no están sujetas a CORS y la URL del backend no se expone al cliente.
 * Solo se consumen endpoints públicos de solo lectura del backend de Xiri.
 */

const API_BASE =
  process.env.XIRI_API_URL ??
  "https://xiri-backend-production.onrender.com/api";

/** Revalidación: los datos cambian poco, se refrescan cada hora. */
const REVALIDATE_SECONDS = 3600;

export interface Food {
  id: number;
  name: string;
  description: string;
  image: string | null;
  cultural_origin: string;
  department_origin: number;
  department_name: string;
  created_at: string;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

export interface GastronomicRoute {
  id: number;
  name: string;
  description: string;
  department: number;
  department_name: string;
}

/**
 * Helper genérico de lectura. Devuelve [] ante cualquier fallo (red, cold-start
 * de Render, JSON inválido) para que la landing nunca rompa por el backend.
 */
async function getList<T>(path: string): Promise<T[]> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? (data as T[]) : [];
  } catch {
    return [];
  }
}

export const getFoods = () => getList<Food>("/gastronomy/foods/");
export const getDepartments = () =>
  getList<Department>("/gastronomy/departments/");
export const getRoutes = () =>
  getList<GastronomicRoute>("/gastronomy/routes/");

export interface LandingData {
  foods: Food[];
  departments: Department[];
  routes: GastronomicRoute[];
}

/** Carga en paralelo todos los datos públicos usados por la landing. */
export async function getLandingData(): Promise<LandingData> {
  const [foods, departments, routes] = await Promise.all([
    getFoods(),
    getDepartments(),
    getRoutes(),
  ]);
  return { foods, departments, routes };
}
