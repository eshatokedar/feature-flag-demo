// API service for feature flags

const API_BASE_URL = 'https://feature-flag-bd79.onrender.com';

export interface FeatureFlag {
  id: number;
  name: string;
  enabled: boolean;
  description: string;
  rolloutPercentage: number;
  createdAt: string;
}

export interface FeatureFlagUpdate {
  name: string;
  enabled: boolean;
  description: string;
}

class FeatureFlagAPI {
  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json'
    };
  }

  async getAllFlags(): Promise<FeatureFlag[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/flags`, {
        headers: this.getHeaders()
      });
      if (!response.ok) {
        throw new Error('Failed to fetch flags');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching flags:', error);
      throw error;
    }
  }

  async toggleFlag(id: number, enabled: boolean): Promise<FeatureFlag> {
    try {
      const response = await fetch(`${API_BASE_URL}/flags/${id}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ enabled }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to toggle flag');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error toggling flag:', error);
      throw error;
    }
  }

  async bulkUpdateFlags(flags: FeatureFlagUpdate[]): Promise<FeatureFlag[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/flags/bulk/update`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ flags }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to bulk update flags');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error bulk updating flags:', error);
      throw error;
    }
  }

  async initializeDefaultFlags(): Promise<FeatureFlag[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/flags/initialize`, {
        method: 'POST',
        headers: this.getHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to initialize default flags');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error initializing default flags:', error);
      throw error;
    }
  }
}

export const featureFlagAPI = new FeatureFlagAPI();
